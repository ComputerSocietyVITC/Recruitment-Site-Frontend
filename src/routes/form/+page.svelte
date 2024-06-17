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

	let deptSelection = 1;
	let preferredDepartments = [];

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

		
	});
</script>

{#if loading === true}
	<section class="h-screen w-screen absolute top-0 left-0 z-10 bg-background"></section>
{:else}
	<section
		class="flex gap-4 border-2 border-background-lighter bg-background-darker rounded-lg p-4 mt-2 overflow-auto"
	>
		<section
			class="border-r-2 border-background-lighter h-full p-2 flex gap-2 flex-col justify-between"
		>
			{#each settings.club.departments as dept, i}
				<span class="text-xl border-2 rounded-lg border-background-lighter p-4">{dept.name}</span>
			{/each}
		</section>
		<section class="border-2 border-primary rounded-lg h-full">hello</section>
	</section>
{/if}
