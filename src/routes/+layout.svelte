<script>
	import '../app.css';

	import Navbar from '$lib/components/home/Navbar.svelte';
</script>

<section class="bg-background text-foreground min-h-screen min-w-screen font-main md:px-24 px-8">
	<Navbar />
	<div class="flex-grow">
		<slot />
	</div>
</section>
