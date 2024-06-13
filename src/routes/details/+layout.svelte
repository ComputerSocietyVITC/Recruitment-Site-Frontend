<script lang="ts">
	import Navbar from '$lib/components/forms/Navbar.svelte';

</script>

<main class="flex flex-col w-[75%] min-h-screen mx-auto">
	<Navbar />
	<section class="flex-grow">
		<slot />
	</section>
</main>
