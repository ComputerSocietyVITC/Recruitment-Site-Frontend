<script lang="ts">
	import settings from '$lib/settings';

	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let displayText = 'departments';
	let cols = 20;
	let rows = 10;

	onMount(() => {
		console.log(window.innerWidth, window.innerHeight);

		if (window.innerWidth < 768) {
			rows = 33;
		} 
	});
</script>

<section class="relative flex flex-col items-center justify-center">
	<section class="flex flex-col items-center justify-center opacity-10">
		{#each { length: rows } as _}
			<div class="item-top flex gap-3 text-lg h-fit transition-all duration-300">
				{#each { length: cols } as _}
					<span>{displayText}</span>
				{/each}
			</div>
			<div class="item-bottom flex gap-3 text-lg h-fit">
				{#each { length: cols } as _}
					<span>{displayText}</span>
				{/each}
			</div>
		{/each}
	</section>
	<section class="absolute top-2 flex flex-col w-full items-center gap-12">
		<span class="font-header text-5xl font-bold p-4">Departments</span>

		<section class="flex md:flex-row flex-col gap-12 text-foreground">
			{#each settings.club.departments as department}
				<div class="gap-4 bg-background w-80 h-96 rounded-xl flex flex-col items-center p-4">
					<div class="flex items-center gap-4 w-full">
						<img src="{base}/assets/departments/{department.icon}" alt="icon" class="w-14 h-14" />
						<span class="text-xl font-header font-semibold">{department.name}</span>
					</div>
					<span class="text-lg flex-grow">{department.description}</span>
					<div class="flex gap-4 items-center justify-end w-full text-2xl">
						<span>{department.head}</span>
						<i class="fa-brands fa-linkedin text-4xl"></i>
					</div>
				</div>
			{/each}
		</section>
	</section>
</section>

<style>
	@keyframes moveTop {
		0% {
			transform: translateY(0px);
		}
		25% {
			transform: translateX(20px);
		}
		75% {
			transform: translateX(-20px);
		}
		100% {
			transform: translateY(0px);
		}
	}
	@keyframes moveBottom {
		0% {
			transform: translateY(0px);
		}
		25% {
			transform: translateX(-20px);
		}
		75% {
			transform: translateX(20px);
		}
		100% {
			transform: translateY(0px);
		}
	}

	.item-top {
		animation: moveTop 3s infinite;
	}
	.item-bottom {
		animation: moveBottom 3s infinite;
	}
</style>
