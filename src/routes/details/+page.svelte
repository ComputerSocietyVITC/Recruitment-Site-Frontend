<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';

	import { goto } from '$app/navigation';

	import { supabase } from '$lib/supabase';

	import { user, changeDetails } from '$lib/stores';

	import settings from '$lib/settings';

	let loading = true;

	let questionIdx = 0;
	let start = true;

	let registrationNumber: string = '';
	let phoneNumber: string = '';
	let firstPreference: string = '';
	let secondPreference: string = '';

	let departmentNames = settings.club.departments.map((department) => department.name);
	let questions = [
		{
			question: 'What is your registration number?',
			options: []
		},
		{
			question: 'What is your phone number (whatsapp enabled)?',
			options: []
		},
		{
			question: 'What is your first departmental preference',
			options: departmentNames
		},
		{
			question: 'What is your second departmental preference',
			options: departmentNames
		}
	];

	onMount(async () => {
		if ($user === null || $user.id === null) {
			const { data } = await supabase.auth.getUser();
			if (data.user) {
				let user_data = await supabase.from('User').select().eq('email', data.user.email).single();
				$user = { id: user_data.data.id, name: user_data.data.name, email: user_data.data.email };
				loading = false;
			} else {
				goto('/auth');
				return;
			}
		} else {
			loading = false;
		}

		let { data, error } = await supabase
			.from('User')
			.select('registrationNumber, phoneNumber, firstPreference, secondPreference')
			.eq('id', $user?.id)
			.single();

		registrationNumber = data?.registrationNumber;
		phoneNumber = data?.phoneNumber;
		firstPreference = data?.firstPreference;
		secondPreference = data?.secondPreference;

		if (
			registrationNumber !== null &&
			phoneNumber !== null &&
			firstPreference !== null &&
			secondPreference !== null &&
			$changeDetails === false
		) {
			goto('/form');
		}
	});
</script>

{#if loading === true}
	<section class="h-screen w-screen absolute top-0 left-0 z-10 bg-background"></section>
{:else}
	<section class="flex flex-col gap-4">
		<section class="md:text-4xl text-2xl px-4 md:px-0">
			<div in:fade|local={{ duration: 2000, easing: cubicInOut }} class="md:w-[50rem] w-80">
				{#if start}
					<span> Hey {$user?.name}! Let's get to know you a bit better...</span>
				{:else if questionIdx === 0}
					<div in:fade|local={{ duration: 2000, easing: cubicInOut }} class="flex flex-col gap-1">
						<input
							type="text"
							name="regNum"
							placeholder="Enter your registration number"
							bind:value={registrationNumber}
							class="p-2 rounded-lg bg-background border-[1px]"
						/>
					</div>
				{:else if questionIdx === 1}
					<div in:fade|local={{ duration: 2000, easing: cubicInOut }} class="flex flex-col gap-1">
						<input
							type="text"
							name="phoneNum"
							placeholder="Enter your phone number"
							bind:value={phoneNumber}
							class="p-2 rounded-lg bg-background border-[1px]"
						/>
					</div>
				{:else if questionIdx === 2}
					<div in:fade|local={{ duration: 2000, easing: cubicInOut }} class="flex flex-col gap-1">
						<label for="">Enter your first preference of department</label>
						<div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-2">
							{#each questions[2].options as option}
								{#if option === firstPreference}
									<div class="md:text-xl text-base flex gap-2 items-center justify-start">
										<input
											type="radio"
											name="pref"
											checked={true}
											on:change|preventDefault={() => {
												firstPreference = option;
											}}
											class="p-2 rounded-lg bg-background border-[1px]"
										/>
										<label for="pref">{option}</label>
									</div>
								{:else}
									<div class="md:text-xl text-base flex gap-2 items-center justify-start">
										<input
											type="radio"
											name="pref"
											checked={false}
											on:change|preventDefault={() => {
												firstPreference = option;
											}}
											class="p-2 rounded-lg bg-background border-[1px]"
										/>
										<label for="pref">{option}</label>
									</div>
								{/if}
							{/each}
						</div>
					</div>
				{:else if questionIdx === 3}
					<div in:fade|local={{ duration: 2000, easing: cubicInOut }} class="flex flex-col gap-1">
						<label for="">Enter your second preference of department</label>

						<div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-2">
							{#each questions[2].options as option}
								{#if option === secondPreference}
									<div class="md:text-xl text-base flex gap-2 items-center justify-start">
										<input
											type="radio"
											name="pref"
											checked={true}
											on:change|preventDefault={() => {
												secondPreference = option;
											}}
											class="p-2 rounded-lg bg-background border-[1px]"
										/>
										<label for="pref">{option}</label>
									</div>
								{:else}
									<div class="md:text-xl text-base flex gap-2 items-center justify-start">
										<input
											type="radio"
											name="pref"
											checked={false}
											on:change|preventDefault={() => {
												secondPreference = option;
											}}
											class="p-2 rounded-lg bg-background border-[1px]"
										/>
										<label for="pref">{option}</label>
									</div>
								{/if}
							{/each}
						</div>
					</div>
				{:else}
					<span in:fade|local={{ duration: 2000, easing: cubicInOut }}
						>That's great! Let's proceed to answering questions per department...</span
					>
				{/if}
			</div>
		</section>

		<section
			class="flex justify-between text-lg px-4 md:px-0"
			transition:fade={{ delay: 1500, duration: 500 }}
		>
			{#if start === false}
				<button
					class="hover:opacity-50 mr-auto"
					on:click|preventDefault={() => {
						if (questionIdx === 0) {
							start = true;
						} else {
							questionIdx -= 1;
						}
					}}>back</button
				>
			{/if}
			{#if questionIdx <= 3}
				<button
					class="hover:opacity-50 ml-auto"
					on:click|preventDefault={async () => {
						if (start === true) {
							start = false;
						} else {
							questionIdx += 1;

							let { data, error } = await supabase
								.from('User')
								.update({
									registrationNumber: registrationNumber,
									phoneNumber: phoneNumber,
									firstPreference: firstPreference,
									secondPreference: secondPreference
								})
								.eq('id', $user?.id);

							if (error) {
								console.error(error);
							}
						}
					}}>next</button
				>
			{:else if questionIdx === 4}
				<button
					class="hover:opacity-50 ml-auto"
					on:click|preventDefault={async () => {
						$changeDetails = false;
						goto('/form');
					}}>next</button
				>
			{/if}
		</section>
	</section>
{/if}
