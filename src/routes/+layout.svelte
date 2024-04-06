<script>
	import '../app.css';

	import Navbar from '$lib/components/Navbar.svelte';
</script>

<section class="bg-background min-h-screen w-full flex flex-col">
	<div>
		<Navbar />
	</div>
	<slot />
	<div></div>
</section>
