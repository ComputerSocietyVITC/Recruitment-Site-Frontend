<script lang="ts">
	const contents = [
		[
			'Join Us',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam consectetur itaque possimus, assumenda consequatur sapiente laborum debitis, odit at, earum repellat ipsam ratione corporis eaque dolores quod? Quidem, dolores?'
		],
		[
			'Connect',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam consectetur itaque possimus, assumenda consequatur sapiente laborum debitis, odit at, earum repellat ipsam ratione corporis eaque dolores quod? Quidem, dolores?'
		],
		[
			'Collaborate',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam consectetur itaque possimus, assumenda consequatur sapiente laborum debitis, odit at, earum repellat ipsam ratione corporis eaque dolores quod? Quidem, dolores?'
		],
		[
			'Explore',
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam consectetur itaque possimus, assumenda consequatur sapiente laborum debitis, odit at, earum repellat ipsam ratione corporis eaque dolores quod? Quidem, dolores?'
		]
	];
</script>

<section class="w-full flex flex-col items-center mt-16" id="about">
	<div
		class="text-2xl font-semibold tracking-wide bg-gray w-[18rem] h-[3rem] flex items-center justify-center mb-10"
	>
		ABOUT US
	</div>

	<div class="flex justify-around gap-[8rem]">
		{#each contents as element}
			<div
				class="flex flex-col gap-4 w-[18rem] h-[20rem] border-2 border-green rounded-3xl p-4 bg-darker_gray"
			>
				<span class="text-center font-semibold text-xl">{element[0]}</span>
				<span>{element[1]}</span>
			</div>
		{/each}
	</div>
</section>
