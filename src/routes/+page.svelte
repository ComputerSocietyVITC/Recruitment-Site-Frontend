<script lang="ts">
	import { goto } from '$app/navigation';

	import { base } from '$app/paths';

	import settings from '$lib/settings';

	import Splash from '$lib/components/home/Splash.svelte';
	import Marquee from '$lib/components/home/Marquee.svelte';
	import Department from '$lib/components/home/Department.svelte';

	import Footer from '$lib/components/home/Footer.svelte';

	import { user } from '$lib/stores';
</script>

<main class="flex flex-col">
	<!-- splash -->

	<section class="flex flex-col justify-around md:gap-24 gap-12">
		<Splash />
		<section class="relative">
			<section class="md:skew-y-2 skew-y-[8deg] border-4 border-background absolute w-full">
				<Marquee direction="left" />
			</section>
			<section class="md:-skew-y-2 -skew-y-[8deg] border-4 border-background absolute w-full">
				<Marquee direction="right" />
			</section>
		</section>
	</section>

	<!-- joinus -->

	<section class="md:mt-36 mt-20 flex md:flex-row flex-col md:gap-24 gap-8">
		<section class="md:flex hidden bg-background p-2 border-foreground border-4 rounded-3xl w-full">
			<img src="{base}/joinus5s.gif" alt="joinus" class="rounded-xl" />
		</section>
		<section class="flex flex-col gap-4 md:w-[75%]">
			<span class="font-header md:text-5xl text-4xl font-bold">But Why Join Us?</span>
			<div class="text-xl w-fit flex flex-col gap-2">
				<span>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quia? Ipsam qui saepe,
					magni debitis, asperiores provident sint repellat hic optio repellendus eaque cupiditate
					atque nostrum ea eligendi? Mollitia, possimus?
				</span>
				<span>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quia? Ipsam qui saepe,
					magni debitis, asperiores provident sint repellat hic optio repellendus eaque cupiditate
					atque nostrum ea eligendi? Mollitia, possimus?
				</span>
				<span class="md:flex hidden">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, quia? Ipsam qui saepe,
					magni debitis, asperiores provident sint repellat hic optio repellendus eaque cupiditate
					atque nostrum ea eligendi? Mollitia, possimus?
				</span>
			</div>
			<button
				class="md:bg-foreground text-background bg-primary rounded-xl font-bold hover:bg-primary transition-colors duration-300 text-lg"
				>Join Us</button
			>
		</section>
		<section class="md:hidden bg-background p-2 border-foreground border-4 rounded-3xl w-full">
			<img src="{base}/joinus5s.gif" alt="joinus" class="rounded-xl" />
		</section>
	</section>

	<!-- departments -->

	<section class="mt-12">
		<Department />
	</section>

	<section>
		<Footer />
	</section>
</main>
