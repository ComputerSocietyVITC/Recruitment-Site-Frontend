<script lang="ts">
	import AboutUs from '$lib/components/AboutUs.svelte';
	import BoardMembers from '$lib/components/BoardMembers.svelte';
	import Departments from '$lib/components/Departments.svelte';
</script>

<main class="flex flex-col items-center py-10">
	<!-- HEADING / SPLASH TEXT -->
	<div class="flex flex-col gap-4 items-center md:mt-0 -mt-8">
		<div class="md:text-5xl text-4xl font-bold tracking-widest md:text-left text-center">IEEE COMPUTER SOCIETY</div>
		<div class="md:text-3xl text-xl font-semibold tracking-wide">CLUB RECRUITMENT SYSTEM</div>
	</div>

	<!-- GET STARTED BUTTON -->
	<button
		class="border-2 border-green border-opacity-60 rounded-[4rem] py-4 px-8 mt-10 text-xl font-bold get-started-button-shadow get-started-button-border btn-1"
		>GET STARTED</button
	>

	<!-- About Us -->
	<AboutUs />

	<!-- Departments  -->
	<Departments />

	<!-- Board Members -->
	<BoardMembers />
</main>

<style>
	.get-started-button-shadow {
		box-shadow: 0px 0px 16px 16px rgba(197, 218, 69, 0.2);
	}
</style>
