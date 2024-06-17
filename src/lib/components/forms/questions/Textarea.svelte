<script lang="ts">
	import { supabase } from '$lib/supabase';

	import { user } from '$lib/stores';

	export let question: string;
	export let response: string;
	export let dept: string;

	const updateResponse = async () => {
		const { data, error } = await supabase
			.from('Response')
			.update({ response: response })
			.eq('question', question)
			.eq('userId', $user?.id)
			.eq('dept', dept);
	};
</script>

<textarea
	bind:value={response}
	on:focusout|preventDefault={updateResponse}
	class="w-full rounded-sm bg-background-lighter border-4 p-2 border-background"
	placeholder="enter your response here..."
></textarea>
