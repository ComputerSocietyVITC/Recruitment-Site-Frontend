<script lang="ts">
	import { goto } from '$app/navigation';

	import settings from '$lib/settings';

	import Splash from '$lib/components/home/Splash.svelte';
	import Departments from '$lib/components/home/Departments.svelte';
	import Footer from '$lib/components/home/Footer.svelte';

	import { user } from '$lib/stores';
</script>

<main class="flex flex-col">
	<Splash />
</main>
