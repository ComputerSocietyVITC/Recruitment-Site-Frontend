<script lang="ts">
	import settings from '$lib/settings';
</script>

<section class="w-full flex flex-col items-center mt-16" id="princples">
	<div
		class="text-2xl font-semibold tracking-wide bg-gray w-[18rem] h-[3rem] flex items-center justify-center mb-10"
	>
		Principles
	</div>

	<div class="flex md:flex-row flex-col md:gap-8 gap-4">
		{#each settings.club.principles as element}
			<div class="flex flex-col gap-4 w-[18rem] h-[20rem] border-2 border-primary rounded-3xl p-4">
				<span class="text-center font-semibold text-xl">{element.name}</span>
				<span>{element.description}</span>
			</div>
		{/each}
	</div>
</section>
