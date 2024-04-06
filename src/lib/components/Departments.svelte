<script lang="ts">
	import { base } from '$app/paths';

	const topRow = [
		['Technical', 'technical.svg'],
		['UI/UX', 'ui-ux.svg']
	];

	const bottomRow = [
		['Design', 'design.svg'],
		['HR/Management', 'management.svg'],
		['Social Media', 'social-media.svg']
	];
</script>

<section class="w-full flex flex-col items-center mt-10" id="departments">
	<div
		class="text-2xl font-semibold tracking-wide bg-gray w-[18rem] h-[3rem] flex items-center justify-center mb-10"
	>
		DEPARTMENTS
	</div>

	<div class="flex flex-col items-center justify-center">
		<div class="flex md:flex-row flex-col md:gap-[20rem] gap-[2rem]">
			{#each topRow as element}
				<div
					class="flex flex-col items-center gap-4 bg-white text-black h-[10rem] w-[15rem] rounded-[2rem]"
				>
					<div class="flex flex-col gap-4 translate-y-2 items-center justify-center">
						<img
							src="{base}/{element[1]}"
							alt={element[0]}
							class="w-[6rem] h-[6rem] translate-y-3"
						/>
						<div class="text-xl font-semibold tracking-wide">{element[0]}</div>
					</div>
				</div>
			{/each}
		</div>
		<div
			class="flex md:flex-row flex-col md:gap-[20rem] gap-[2rem] md:-translate-y-10 md:mt-0 mt-[2rem]"
		>
			{#each bottomRow as element}
				<div
					class="flex flex-col items-center gap-4 bg-white text-black h-[10rem] w-[15rem] rounded-[2rem]"
				>
					<div class="flex flex-col gap-4 translate-y-2 items-center justify-center">
						<img src="{base}/{element[1]}" alt={element[0]} class="w-[6rem] h-[6rem] translate-y-3" />
						<div class="text-xl font-semibold tracking-wide">{element[0]}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
