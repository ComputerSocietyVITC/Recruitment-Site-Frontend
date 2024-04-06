<script lang="ts">
	import AboutUs from '$lib/components/AboutUs.svelte';
</script>

<main class="flex flex-col items-center py-10">
	<!-- HEADING / SPLASH TEXT -->
	<div class="flex flex-col gap-4 items-center">
		<div class="text-5xl font-bold tracking-widest">IEEE COMPUTER SOCIETY</div>
		<div class="text-3xl font-semibold tracking-wide">CLUB RECRUITMENT SYSTEM</div>
	</div>

	<!-- GET STARTED BUTTON -->
	<button
		class="border-2 border-green border-opacity-60 rounded-[4rem] py-4 px-8 mt-10 text-xl font-bold get-started-button-shadow get-started-button-border btn-1"
		>GET STARTED</button
	>

	<!-- About Us -->
	<AboutUs />
</main>

<style>
	.get-started-button-shadow {
		box-shadow: 0px 0px 16px 16px rgba(197, 218, 69, 0.2);
	}
</style>
