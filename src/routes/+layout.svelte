<script>
	import '../app.css';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<section class="bg-background text-white min-h-screen min-w-screen flex flex-col font-main">
	<Navbar />
	<div class="flex-grow">
		<slot />
	</div>
	<Footer />
</section>
