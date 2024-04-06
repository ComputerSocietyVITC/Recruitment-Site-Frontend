<script>
	import '../app.css';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<section class="bg-background min-h-screen w-full flex flex-col font-main">
	<Navbar />
	<div class="flex-grow">
		<slot />
	</div>
	<Footer />
</section>
