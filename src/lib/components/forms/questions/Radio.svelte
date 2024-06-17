<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';

	export let question: string;
	export let response: string;
	export let fields: string[] | undefined;
	export let dept: string;

	if (fields === undefined) {
		fields = [];
	}

	let checked = '';

	const handleRadioChange = async (event: Event) => {
		const target = event.target as HTMLInputElement;
		const { data, error } = await supabase
			.from('Response')
			.update({ response: target.value })
			.eq('question', question)
			.eq('userId', $user?.id)
			.eq('dept', dept);

		console.log(data, error);
	};

	onMount(() => {
		checked = response;
	});
</script>

<section class="flex flex-col text-lg gap-1 mx-2">
	{#each fields as field}
		<div class="flex gap-2">
			<input
				bind:group={checked}
				type="radio"
				name={field}
				value={field}
				on:change|preventDefault={handleRadioChange}
				class="accent-primary"
			/>
			<span class="opacity-80">
				{field}
			</span>
		</div>
	{/each}
</section>
