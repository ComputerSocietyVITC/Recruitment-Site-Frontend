<script>
	import '../app.css';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<section class="bg-background text-text min-h-screen min-w-screen font-main">
	<div class="flex flex-col w-[80%] mx-auto">
		<Navbar />
		<div class="flex-grow">
			<slot />
		</div>
		<Footer />
	</div>
</section>
