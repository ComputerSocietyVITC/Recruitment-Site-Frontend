<script lang="ts">
	import { onMount } from 'svelte';

	import { QuestionTypes, type Question, Departments } from '../../app.d.js';

	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';

	import { supabase } from '$lib/supabase';
	import { user, changeDetails, submitted } from '$lib/stores';

	import settings from '$lib/settings';

	import Textarea from '$lib/components/forms/questions/Textarea.svelte';
	import Text from '$lib/components/forms/questions/Text.svelte';
	import Radio from '$lib/components/forms/questions/Radio.svelte';

	const DEPARTMENTS = {
		Technical: Departments.TECHNICAL,
		'HR and Management': Departments.MANAGEMENT,
		'UI/UX and Design': Departments.DESIGN,
		'Social Media and Content': Departments.SMC
	};

	let firstPref = '';
	let secondPref = '';

	let firstPrefQuestions: Question[] = [];
	let secondPrefQuestions: Question[] = [];

	let selected = 'firstPref';

	let loading = true;

	onMount(async () => {
		if ($user === null || $user.id === null) {
			const { data } = await supabase.auth.getUser();
			if (data.user) {
				let user_data = await supabase.from('User').select().eq('email', data.user.email).single();
				$user = { id: user_data.data.id, name: user_data.data.name, email: user_data.data.email };
				$submitted = user_data.data.submitted;

				if ($submitted === true) {
					goto('/join');
				}

				loading = false;
			} else {
				goto('/auth');
				return;
			}
		}

		let { data, error } = await supabase
			.from('User')
			.select('firstPreference, secondPreference')
			.eq('id', $user.id)
			.single();

		firstPref = data?.firstPreference;
		secondPref = data?.secondPreference;

		if (!firstPref || !secondPref) {
			$changeDetails = true;
			goto('/details');
		}

		const { data: firstPrefData } = await supabase
			.from('Question')
			.select()
			.eq('department', DEPARTMENTS[firstPref as keyof typeof DEPARTMENTS]);

		const { data: secondPrefData } = await supabase
			.from('Question')
			.select()
			.eq('department', DEPARTMENTS[secondPref as keyof typeof DEPARTMENTS]);

		if (firstPrefData && secondPrefData) {
			firstPrefQuestions = firstPrefData;
			secondPrefQuestions = secondPrefData;

			loading = false;
		}
	});
</script>

{#if loading === true}
	<section class="h-screen w-screen fixed top-0 left-0 z-10 bg-background"></section>
{:else if $submitted}
	<section
		class="h-screen w-screen fixed top-0 left-0 z-10 bg-background flex flex-col gap-8 items-center justify-center"
	>
		<div class="text-6xl font-bold text-center">YOU HAVE ALREADY SUBMITTED THE FORM</div>

		<img src="/qrcode.png" alt="" class="w-96 rounded-3xl" />
		<div class="text-2xl font-bold text-center">kindly join the group for further information</div>
	</section>
{:else}
	<section class="flex flex-col gap-4 border-[1px] bg-background-darker rounded-lg p-4 mt-2">
		<!-- mobile -->
		<section
			class="border-b-[1px] border-background-lighter p-4 md:hidden flex flex-col justify-center items-center gap-2"
		>
			<div class="flex justify-between gap-4" >
				<button
					on:click={() => {
						selected = 'firstPref';
					}}
					class="text-sm border-[1px] rounded-lg border-background-lighter p-4 transition-all duration-300 {selected ===
					'firstPref'
						? 'border-primary border-opacity-50'
						: ''}">{firstPref}</button
				>

				{#if firstPref !== secondPref}
					<button
						on:click={() => {
							selected = 'secondPref';
						}}
						class="text-sm border-[1px] rounded-lg border-background-lighter p-4 transition-all duration-300 {selected ===
						'secondPref'
							? 'border-primary border-opacity-50'
							: ''}">{secondPref}</button
					>
				{/if}
			</div>

			<span class="font-semibold text-center">kindly submit only after filling both your preferences</span>
		</section>

		<!-- desktop -->
		<section
			class="border-b-[1px] border-background-lighter p-4 md:flex md:flex-col hidden w-full justify-center items-center gap-2"
		>
			<div class="flex w-full justify-around">
				<button
					on:click={() => {
						selected = 'firstPref';
					}}
					class="text-xl border-2 rounded-lg border-background-lighter p-4 transition-all duration-300 {selected ===
					'firstPref'
						? 'border-primary border-opacity-50'
						: ''}">{firstPref}</button
				>
				{#if firstPref !== secondPref}
					<button
						on:click={() => {
							selected = 'secondPref';
						}}
						class="text-xl border-[1px] rounded-lg border-background-lighter p-4 transition-all duration-300 {selected ===
						'secondPref'
							? 'border-primary border-opacity-50'
							: ''}">{secondPref}</button
					>
				{/if}

				{#each settings.club.departments as dept, i}
					{#if dept.name !== firstPref && dept.name !== secondPref}
						<span class="text-xl border-2 rounded-lg border-background-lighter p-4 opacity-25"
							>{dept.name}</span
						>
					{/if}
				{/each}
			</div>

			<span class="font-semibold">kindly submit only after filling both your preferences</span>
		</section>

		<section class="w-full md:p-6 p-2 flex flex-col gap-4" transition:slide>
			{#if selected === 'firstPref'}
				<div transition:slide class="flex flex-col gap-8">
					{#each firstPrefQuestions as question, i}
						<div class="flex justify-between gap-2" transition:slide>
							<span class="md:text-xl">{i + 1}. {question.question}</span>
						</div>
						{#if question.type === QuestionTypes.TEXT}
							<Text questionId={question.id} />
						{:else if question.type === QuestionTypes.TEXTAREA}
							<Textarea questionId={question.id} />
						{:else if question.type === QuestionTypes.RADIO}
							<Radio questionId={question.id} />
						{/if}
					{/each}
				</div>
			{:else if selected === 'secondPref' && firstPref !== secondPref}
				<div transition:slide class="flex flex-col gap-8">
					{#each secondPrefQuestions as question, i}
						<div class="flex justify-between">
							<span class="md:text-xl">{i + 1}. {question.question}</span>
						</div>
						{#if question.type === QuestionTypes.TEXT}
							<Text questionId={question.id} />
						{:else if question.type === QuestionTypes.TEXTAREA}
							<Textarea questionId={question.id} />
						{:else if question.type === QuestionTypes.RADIO}
							<Radio questionId={question.id} />
						{/if}
					{/each}
				</div>
			{/if}
		</section>
	</section>

	<button
		class="bg-foreground text-background flex justify-center w-full text-xl rounded-lg my-4 font-semibold py-1"
		on:click|preventDefault={async () => {
			$submitted = true;

			if ($user === null) {
				return;
			}
			await supabase.from('User').update({ submitted: true }).eq('id', $user.id);
			goto('/join');
		}}>submit</button
	>
{/if}
