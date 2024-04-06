<script lang="ts">
	const navItem = 'hover-1';
</script>

<nav class="flex justify-between text-white px-8 py-4">
	<div class="flex items-center text-2xl font-bold gap-8">
		<img src="/logo.png" alt="IEEE Comp Soc Logo" class="w-14" />
		<span>IEEE Computer Society</span>
	</div>
	<div class="flex gap-12 items-center text-xl">
		<a href="/" class={navItem}><div>Home</div></a>
		<a href="#about" class={navItem}><div>About us</div></a>
		<a href="#departments" class={navItem}><div>Departments</div></a>
		<a href="#board" class={navItem}><div>Board</div></a>
		<a href="#contacts" class={navItem}><div>Contacts</div></a>
	</div>
</nav>
