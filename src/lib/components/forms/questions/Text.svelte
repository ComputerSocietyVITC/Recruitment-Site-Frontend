<script lang="ts">
	import { supabase } from '$lib/supabase';

	import { user } from '$lib/stores';

	export let question: string;
	export let response: string;

	const updateResponse = async () => {
		const { data, error } = await supabase
			.from('Response')
			.update({ response: response })
			.eq('question', question)
			.eq('userId', $user?.id);
	};
</script>

<input
	class="w-full rounded-lg bg-background-lighter border-4 p-2 border-background"
	type="text"
	placeholder="enter your response here..."
	bind:value={response}
	on:focusout|preventDefault={updateResponse}
/>
