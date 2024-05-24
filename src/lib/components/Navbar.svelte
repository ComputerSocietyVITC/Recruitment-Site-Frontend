<script lang="ts">
	import settings from '$lib/settings';
	import { base } from '$app/paths';
</script>

<nav class="flex md:justify-between justify-center md:mt-0 mt-4 text-white px-8 py-4">
	<div class="md:flex hidden items-center md:text-2xl text-lg font-bold gap-4">
		<img src="{base}/assets/{settings.club.logo}" alt="IEEE Comp Soc Logo" class="md:w-14 w-10" />
		<span>{settings.club.name}</span>
	</div>
	<div class="flex md:gap-12 gap-4 items-center md:text-xl text-sm font-semibold">
		<a href="{base}/"><div>Home</div></a>
		<a href="{base}/#principles"><div>Principles</div></a>
		<a href="{base}/#departments"><div>Departments</div></a>
	</div>
</nav>
