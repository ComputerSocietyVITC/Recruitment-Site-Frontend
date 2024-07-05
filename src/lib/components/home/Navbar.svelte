<script lang="ts">
	import settings from '$lib/settings';
	import { base } from '$app/paths';
</script>

<nav class="bg-background flex md:justify-between justify-center items-center md:mt-0 md:py-8 py-8 ">
	<div class="flex gap-4 items-center md:text-4xl text-2xl font-semibold">
		<img src="{base}/assets/{settings.club.logo}" alt="club Logo" class="md:w-14 w-10" />
		<span class="-translate-y-0.5">{settings.club.name}</span>
	</div>
	<button class="md:flex items-center justify-center hidden bg-foreground text-background w-[10%] rounded-xl text-xl font-semibold py-4 hover:bg-primary transition-colors ease-in-out duration-300"
		>Join Us</button
	>
</nav>
