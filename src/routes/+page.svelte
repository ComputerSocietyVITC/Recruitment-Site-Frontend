<script lang="ts">
	import { goto } from '$app/navigation';

	import settings from '$lib/settings';

	import Navbar from '$lib/components/home/Navbar.svelte';
	import Principles from '$lib/components/home/Principles.svelte';
	import Departments from '$lib/components/home/Departments.svelte';
	import Footer from '$lib/components/home/Footer.svelte';

	import { user } from '$lib/stores';
</script>

<main class="flex flex-col w-[80%] mx-auto">
	<Navbar />
	<div class="flex-grow">
		<section class="flex flex-col items-center py-10">
			<!-- HEADING / SPLASH TEXT -->
			<div class="flex flex-col gap-4 items-center md:mt-0 -mt-8">
				<div class="md:text-5xl text-4xl font-bold tracking-widest text-center">
					{settings.club.name.toUpperCase()}
				</div>
				<div class="md:text-3xl text-xl font-semibold tracking-wide">CLUB RECRUITMENT SYSTEM</div>
			</div>

			<div class="text-xl md:w-[75%] text-center mt-4 p-4">
				{settings.club.about}
			</div>

			<!-- GET STARTED BUTTON -->
			<button
				on:click|preventDefault={async () => {
					if ($user) {
						// to question answer
					} else {
						goto('/auth');
					}
				}}
				class="border-2 border-primary rounded-[4rem] py-4 px-8 mt-10 text-xl font-bold get-started-button-shadow"
			>
				GET STARTED
			</button>

			<!-- About Us -->
			<Principles />

			<!-- Departments  -->
			<Departments />
		</section>
	</div>
	<Footer />
</main>

<style>
	.get-started-button-shadow {
		box-shadow: 0px 0px 16px 16px rgba(197, 218, 69, 0.2);
	}
</style>
