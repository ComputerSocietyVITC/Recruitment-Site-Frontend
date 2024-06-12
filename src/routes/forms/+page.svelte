<script lang="ts">
	import { onMount } from 'svelte';

	import { goto } from '$app/navigation';

	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';
	import { generateUUID } from '$lib/utils';

	import settings from '$lib/settings';

	import Textarea from '$lib/components/forms/questions/Textarea.svelte';
	import Text from '$lib/components/forms/questions/Text.svelte';
	import Radio from '$lib/components/forms/questions/Radio.svelte';
	import Checkbox from '$lib/components/forms/questions/Checkbox.svelte';

	let questionsArray: { question: string; response: string; type: string; required: boolean }[] =
		[];

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

		let missingResponses = [];

		for (let i = 0; i < settings.club.questions.length; i++) {
			let question = settings.club.questions[i];

			const { data, error } = await supabase
				.from('Response')
				.select()
				.eq('userId', $user?.id)
				.eq('question', question.question)
				.single();

			if (!data) {
				if (question.required) {
					missingResponses.push({
						id: generateUUID(),
						question: question.question,
						userId: $user?.id,
						response: ''
					});
					questionsArray = [
						...questionsArray,
						{
							question: question.question,
							response: '',
							type: question.type,
							required: question.required
						}
					];
				}
			} else {
				questionsArray = [
					...questionsArray,
					{
						question: question.question,
						response: data.response,
						type: question.type,
						required: question.required
					}
				];
			}
		}

		if (missingResponses.length > 0) {
			const { data, error } = await supabase.from('Response').insert(missingResponses);

			if (error) {
				console.error(error);
			}
		}
	});
</script>

{#if loading === true}
	<section class="h-screen w-screen absolute top-0 left-0 z-10 bg-background"></section>
{:else if questionsArray.length > 0}
	<section class="flex flex-col gap-2">
		<span class="text-xl">Hey {$user?.name}! Lets get to know you a bit better...</span>
		<section
			class="flex flex-col gap-4 justify-center items-center border-2 border-background-lighter bg-background-darker rounded-lg p-4 mt-2 overflow-auto"
		>
			{#each questionsArray as question, idx}
				<div class="flex flex-col w-[90%]">
					<div class="flex items-center justify-between">
						<span class="tracking-wide text-[1.5rem]">{idx + 1}. {question.question}</span>
						{#if question.required}
							<span class="opacity-50">{question.required ? 'required' : ''}</span>
						{/if}
					</div>

					<section class="w-full px-6 py-2">
						{#if question.type === 'textarea'}
							<Textarea response={question.response} question={question.question} />
						{:else if question.type === 'text'}
							<Text question={question.question} response={question.response} />
						{:else if question.type === 'radio'}
							<Radio
								question={question.question}
								response={question.response}
								fields={settings.club.questions[idx].options}
							/>
						{:else if question.type === 'checkbox'}
							<Checkbox
								fields={settings.club.questions[idx].options}
								limit={settings.club.questions[idx].limit}
								response={question.response}
								question={question.question}
							/>
						{/if}
					</section>
				</div>
			{/each}
		</section>
		<span class="text-xl w-full flex justify-end">continue...</span>
	</section>
{/if}
