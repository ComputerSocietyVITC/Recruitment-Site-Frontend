<script lang="ts">
	const clubLeads = [
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'President ka left haath',
			quote: 'You have never seen me and batman together have you'
		},
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'President',
			quote: 'You have never seen me and batman together have you'
		},
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'President ka right haath',
			quote: 'You have never seen me and batman together have you'
		}
	];

	const departmentLeads = [
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'Technical Lead',
			quote: 'You have never seen me and batman together have you'
		},
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'UI/UX Lead',
			quote: 'You have never seen me and batman together have you'
		},
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'Design Lead',
			quote: 'You have never seen me and batman together have you'
		},
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'HR/Management Lead',
			quote: 'You have never seen me and batman together have you'
		},
		{
			name: 'placeholder',
			image: '/default-user.jpg',
			department: 'Social Media Lead',
			quote: 'You have never seen me and batman together have you'
		}
	];
</script>

<section class="w-full flex flex-col items-center mt-10" id="board">
	<div
		class="text-2xl font-semibold tracking-wide bg-gray w-[18rem] h-[3rem] flex items-center justify-center md:mb-20 mb-10"
	>
		BOARD MEMBERS
	</div>

	<div class="flex flex-col items-center justify-center">
		<div class="flex md:flex-row flex-col md:gap-[4rem] gap-[2rem] md:mb-10">
			{#each clubLeads as user, idx}
				{#if idx === 1}
					<div
						class="flex flex-col bg-darker_gray w-[16rem] h-[20rem] md:-translate-y-[2rem] items-center p-4 rounded-2xl gap-2 border-2 border-green border-opacity-50"
					>
						<img src={user.image} alt={user.name} class="rounded-full h-36 w-36" />
						<span class="font-semibold text-xl">{user.name}</span>
						<span class="font-semibold text-sm text-gold">{user.department}</span>
						<span class="italic text-sm text-center mt-4">{user.quote}</span>
					</div>
				{:else}
					<div
						class="flex flex-col bg-darker_gray w-[16rem] h-[20rem] md:translate-y-[2rem] items-center p-4 rounded-2xl gap-2 border-2 border-green border-opacity-50"
					>
						<img src={user.image} alt={user.name} class="rounded-full h-36 w-36" />
						<span class="font-semibold text-xl">{user.name}</span>
						<span class="font-semibold text-sm text-gold">{user.department}</span>
						<span class="italic text-sm text-center mt-4">{user.quote}</span>
					</div>
				{/if}
			{/each}
		</div>
		<div class="flex md:flex-row flex-col md:gap-[4rem] gap-[2rem] mt-8">
			{#each departmentLeads as user}
				<div
					class="flex flex-col bg-darker_gray w-[16rem] h-[20rem] items-center p-4 rounded-2xl gap-2 border-2 border-green border-opacity-50"
				>
					<img src={user.image} alt={user.name} class="rounded-full h-36 w-36" />
					<span class="font-semibold text-xl">{user.name}</span>
					<span class="font-semibold text-sm text-gold">{user.department}</span>
					<span class="italic text-sm text-center mt-4">{user.quote}</span>
				</div>
			{/each}
		</div>
	</div>
</section>
