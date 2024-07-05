<script lang="ts">
	import { goto } from '$app/navigation';

	import settings from '$lib/settings';

	import Splash from '$lib/components/home/Splash.svelte';
	import Marquee from '$lib/components/home/Marquee.svelte';

	import { user } from '$lib/stores';
</script>

<main class="flex flex-col relative">
	<section class="flex flex-col justify-around h-screen">
		<Splash />
		<section class="relative md:mt-0 mt-6">
			<section class="md:skew-y-2 skew-y-[8deg] border-4 border-background absolute w-full">
				<Marquee direction="left" />
			</section>
			<section class="md:-skew-y-2 -skew-y-[8deg] border-4 border-background absolute w-full">
				<Marquee direction="right" />
			</section>
		</section>
	</section>
</main>
