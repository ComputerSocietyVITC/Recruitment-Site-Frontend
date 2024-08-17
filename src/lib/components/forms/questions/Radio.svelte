<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';

	export let questionId: string;

	let responseId: any = '';

	let fields: any = [];
	let response: any = '';

	onMount(async () => {
		const { data: questionChoices } = await supabase
			.from('Question')
			.select('options')
			.eq('id', questionId)
			.single();

		fields = questionChoices?.options.split(',');

		const { data: responseDB } = await supabase
			.from('AnswerMapping')
			.select('response')
			.eq('questionId', questionId)
			.single();


		console.log(responseDB)

		if (responseDB === null) {
			const error = await supabase
				.from('AnswerMapping')
				.insert({ userId: $user?.id, questionId: questionId });

			if (error) {
				console.error(error);
			}
		} else {
			response = responseDB.response;
		}
	});

	const handleRadioChange = async (event: Event) => {
		const target = event.target as HTMLInputElement;

		const { data, error } = await supabase
			.from('AnswerMapping')
			.update({ response: target.value })
			.eq('questionId', questionId);
		console.log(data, error)
	};
</script>

<section class="grid md:grid-cols-2 grid-cols-1 text-lg gap-1 mx-2">
	{#each fields as field}
		<div class="flex gap-2">
			<input
				bind:group={response}
				type="radio"
				name={field}
				value={field}
				on:change|preventDefault={handleRadioChange}
				class="accent-primary"
			/>
			<span class="text-base">
				{field}
			</span>
		</div>
	{/each}
</section>
