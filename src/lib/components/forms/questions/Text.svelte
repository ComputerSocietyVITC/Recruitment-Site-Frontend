<script lang="ts">
	import { supabase } from '$lib/supabase';

	import { user } from '$lib/stores';
	import { onMount } from 'svelte';

	export let questionId: string;

	let response: any = '';

	onMount(async () => {
		const { data: responseDB } = await supabase
			.from('AnswerMapping')
			.select('response')
			.eq('questionId', questionId)
			.single();

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

	const updateResponse = async () => {
		const { data, error } = await supabase
			.from('AnswerMapping')
			.update({ response })
			.eq('questionId', questionId);

	};
</script>

<input
	class="w-full rounded-lg bg-background-lighter text-background border-4 p-2 border-background"
	type="text"
	placeholder="enter your response here..."
	bind:value={response}
	on:focusout|preventDefault={updateResponse}
/>
