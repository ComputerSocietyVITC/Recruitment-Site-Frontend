<script lang="ts">
	import settings from '$lib/settings';

	import { base } from '$app/paths';
</script>

<section class="w-full flex flex-col items-center mt-10" id="departments">
	<div
		class="text-2xl font-semibold tracking-wide bg-gray w-[18rem] h-[3rem] flex items-center justify-center mb-10"
	>
		Departments
	</div>

	<div class="flex flex-col items-center justify-center">
		<div class="flex flex-col gap-4 items-center">
			{#each settings.club.departments as element}
				<div
					class="flex flex-col items-center gap-4 border-2 border-primary rounded-3xl p-4 w-[80%]"
				>
					<div class="flex md:flex-row flex-col gap-4 translate-y-2 items-center justify-center">
						<img
							src="{base}/assets/departments/{element.icon}"
							alt={element.name}
							class="w-[6rem] h-[6rem]"
						/>
						<div class="flex flex-col gap-2 w-full">
							<div class="text-2xl font-semibold tracking-wide">{element.name}</div>
							<div>{element.description}</div>
							<div class="flex justify-end items-center gap-4 text-lg">
								<strong>{element.head}</strong>
								<a href={element.linkedlin}>
									<i
										class="fa-brands fa-linkedin-in bg-primary bg-opacity-25 rounded-lg border-2 border-primary p-2"
									></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
