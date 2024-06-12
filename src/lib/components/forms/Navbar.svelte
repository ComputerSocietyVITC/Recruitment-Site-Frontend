<script lang="ts">
	import settings from '$lib/settings';

	import { goto } from '$app/navigation';

	import { base } from '$app/paths';
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';
</script>

<nav class="flex md:justify-between justify-center md:mt-0 mt-4 py-4">
	<div class="md:flex hidden items-center md:text-2xl text-lg font-bold gap-4">
		<img src="{base}/assets/{settings.club.logo}" alt="club Logo" class="md:w-14 w-10" />
		<span>{settings.club.name}</span>
	</div>
	<div class="flex md:gap-12 gap-4 items-center md:text-xl text-sm font-semibold">
		<a href="{base}/"><div>Home</div></a>
		<button
			on:click|preventDefault={async () => {
				$user = null;
				await supabase.auth.signOut();
				goto('/');
			}}>Logout</button
		>
	</div>
</nav>
