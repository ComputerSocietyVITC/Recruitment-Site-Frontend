<script lang="ts">
	import { onMount } from 'svelte';

	import type { Response } from '../../app.d.ts';

	import { goto } from '$app/navigation';

	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';
	import { generateUUID } from '$lib/utils';

	import settings from '$lib/settings';

	import Textarea from '$lib/components/forms/questions/Textarea.svelte';
	import Text from '$lib/components/forms/questions/Text.svelte';
	import Radio from '$lib/components/forms/questions/Radio.svelte';
	import Checkbox from '$lib/components/forms/questions/Checkbox.svelte';

	let firstPref = '';
	let secondPref = '';

	let firstPrefResponses: Response[] = [];
	let secondPrefResponses: Response[] = [];

	let selected = 'firstPref';

	let loading = true;

	onMount(async () => {
		if ($user === null || $user.id === null) {
			const { data } = await supabase.auth.getUser();
			if (data.user) {
				let user_data = await supabase.from('User').select().eq('email', data.user.email).single();
				$user = { id: user_data.data.id, name: user_data.data.name, email: user_data.data.email };
				loading = false;
			} else {
				goto('/auth');
				return;
			}
		} else {
			loading = false;
		}

		let { data, error } = await supabase
			.from('User')
			.select('firstPreference, secondPreference')
			.eq('id', $user.id)
			.single();

		firstPref = data?.firstPreference;

		if (firstPref) {
			let { data, error } = await supabase
				.from('Response')
				.select()
				.eq('userId', $user.id)
				.eq('dept', firstPref);

			if (error) console.error(error);

			if (data === null || data.length === 0) {
				const firstPrefObj = settings.club.departments.find((item) => item.name === firstPref);
				const updatedQuestions = firstPrefObj?.questions.map((question) => ({
					id: generateUUID(),
					question: question.question,
					response: '',
					dept: firstPref,
					userId: $user?.id,
					type: question.type,
					limit: question.limit,
					options: question.options,
					required: question.required
				}));

				if (updatedQuestions) {
					firstPrefResponses = updatedQuestions;
				}

				let { data, error } = await supabase.from('Response').insert(updatedQuestions);

				if (error) console.error(error);
			} else {
				firstPrefResponses = data;
			}
		}

		secondPref = data?.secondPreference;

		if (secondPref) {
			let { data, error } = await supabase
				.from('Response')
				.select()
				.eq('userId', $user.id)
				.eq('dept', secondPref);

			if (error) console.error(error);

			if (data === null || data.length === 0) {
				const secondPrefObj = settings.club.departments.find((item) => item.name === secondPref);
				const updatedQuestions = secondPrefObj?.questions.map((question) => ({
					id: generateUUID(),
					question: question.question,
					response: '',
					dept: secondPref,
					userId: $user?.id,
					type: question.type,
					limit: question.limit,
					options: question.options,
					required: question.required
				}));

				if (updatedQuestions) {
					secondPrefResponses = updatedQuestions;
				}

				let { data, error } = await supabase.from('Response').insert(updatedQuestions);
				if (error) console.error(error);
			} else {
				secondPrefResponses = data;
			}
		}
	});
</script>

{#if loading === true}
	<section class="h-screen w-screen absolute top-0 left-0 z-10 bg-background"></section>
{:else}
	<section class="md:hidden py-4 flex justify-around w-full border-2 border-background-lighter rounded-lg bg-background-darker">
		<button
			on:click={() => {
				selected = 'firstPref';
			}}
			class="transition-all duration-300 {selected ===
			'firstPref'
				? 'underline  underline-offset-8'
				: ''}">{firstPref}</button
		>
		<button
			on:click={() => {
				selected = 'secondPref';
			}}
			class="transition-all duration-300 {selected ===
			'secondPref'
				? 'underline underline-offset-8'
				: ''}">{secondPref}</button
		>
	</section>
	<section
		class="flex gap-4 border-2 border-background-lighter bg-background-darker rounded-lg p-4 mt-2 overflow-auto"
	>
		<section
			class="border-r-2 border-background-lighter w-80 p-4 md:flex gap-2 flex-col justify-around fixed h-[45rem] hidden"
		>
			<button
				on:click={() => {
					selected = 'firstPref';
				}}
				class="text-xl border-2 rounded-lg border-background-lighter p-4 transition-all duration-300 {selected ===
				'firstPref'
					? 'border-primary border-opacity-50'
					: ''}">{firstPref}</button
			>
			<button
				on:click={() => {
					selected = 'secondPref';
				}}
				class="text-xl border-2 rounded-lg border-background-lighter p-4 transition-all duration-300 {selected ===
				'secondPref'
					? 'border-primary border-opacity-50'
					: ''}">{secondPref}</button
			>
			{#each settings.club.departments as dept, i}
				{#if dept.name !== firstPref && dept.name !== secondPref}
					<span class="text-xl border-2 rounded-lg border-background-lighter p-4 opacity-25"
						>{dept.name}</span
					>
				{/if}
			{/each}
		</section>
		<section class="w-full md:p-6 p-2 flex flex-col gap-4 md:h-[45rem] md:ml-80">
			{#if selected === 'firstPref'}
				{#each firstPrefResponses as question, i}
					<div class="flex justify-between gap-2">
						<span class="md:text-xl">{i + 1}. {question.question}</span>
						<span>{question.required ? 'required' : ''}</span>
					</div>
					{#if question.type === 'text'}
						<Text question={question.question} response={question.response} dept={question.dept} />
					{:else if question.type === 'textarea'}
						<Textarea
							question={question.question}
							response={question.response}
							dept={question.dept}
						/>
					{:else if question.type === 'radio'}
						<Radio
							question={question.question}
							response={question.response}
							fields={question.options}
							dept={question.dept}
						/>
					{:else if question.type === 'checkbox'}
						<Checkbox
							question={question.question}
							response={question.response}
							fields={question.options}
							limit={question.limit}
							dept={question.dept}
						/>
					{/if}
				{/each}
			{:else if selected === 'secondPref'}
				{#each secondPrefResponses as question, i}
					<div class="flex justify-between">
						<span class="md:text-xl">{i + 1}. {question.question}</span>
						<span>{question.required ? 'required' : ''}</span>
					</div>
					{#if question.type === 'text'}
						<Text question={question.question} response={question.response} dept={question.dept} />
					{:else if question.type === 'textarea'}
						<Textarea
							question={question.question}
							response={question.response}
							dept={question.dept}
						/>
					{:else if question.type === 'radio'}
						<Radio
							question={question.question}
							response={question.response}
							fields={question.options}
							dept={question.dept}
						/>
					{:else if question.type === 'checkbox'}
						<Checkbox
							question={question.question}
							response={question.response}
							fields={question.options}
							dept={question.dept}
							limit={question.limit}
						/>
					{/if}
				{/each}
			{/if}
		</section>
	</section>
{/if}
