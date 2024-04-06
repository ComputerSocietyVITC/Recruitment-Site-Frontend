<script lang="ts">
	import { base } from '$app/paths';

	const navItem = 'hover-1';
</script>

<nav class="flex md:justify-between justify-center md:mt-0 mt-4 text-white px-8 py-4">
	<div class="md:flex hidden items-center md:text-2xl text-lg font-bold gap-8">
		<img src="{base}/logo.png" alt="IEEE Comp Soc Logo" class="md:w-14 w-10" />
		<span>IEEE Computer Society</span>
	</div>
	<div class="flex md:gap-12 gap-4 items-center md:text-xl text-sm font-semibold">
		<a href="{base}/" class={navItem}><div>Home</div></a>
		<a href="{base}/#about" class={navItem}><div>About</div></a>
		<a href="{base}/#departments" class={navItem}><div>Departments</div></a>
		<a href="{base}/#board" class={navItem}><div>Board</div></a>
		<a href="{base}/#contacts" class={navItem}><div>Contacts</div></a>
	</div>
</nav>
