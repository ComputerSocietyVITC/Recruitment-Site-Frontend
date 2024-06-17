<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';
	import { onMount } from 'svelte';

	export let fields: string[] | undefined | null;
	export let limit: number | undefined;
	export let question: string;
	export let response: string;
	export let dept: string;

	if (fields === undefined || fields === null) {
		fields = [];
	}

	let checked: string[] = [];

	const handleCheckboxChange = async (event: Event) => {
		if (!limit) return;

		const target = event.target as HTMLInputElement;
		const isChecked = target.checked;

		if (isChecked && checked.length > limit) {
			target.checked = false;
			alert(
				`You can only select up to ${limit} options. please uncheck one of the selected options.`
			);
			checked.pop();
		}
		response = checked.join(',');

		const { data, error } = await supabase
			.from('Response')
			.update({ response: response })
			.eq('question', question)
			.eq('userId', $user?.id)
			.eq('dept', dept);

		console.log(data, error);
	};

	onMount(() => {
		checked = response.split(',');
	});
</script>

<section class="flex flex-col text-lg gap-1 mx-2">
	{#each fields as field}
		<div class="flex gap-2">
			<input
				bind:group={checked}
				on:change|preventDefault={handleCheckboxChange}
				type="checkbox"
				name={field}
				value={field}
				class="accent-primary"
			/>
			<span class="opacity-80">
				{field}
			</span>
		</div>
	{/each}
</section>
