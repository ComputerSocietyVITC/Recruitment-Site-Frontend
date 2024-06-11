<script lang="ts">
	let action = 'login';

	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';

	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';

	let name = '';
	let email = '';
	let password = '';

	const handleSignup = async () => {
		if (/^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/.test(email)) {
			const { data, error } = await supabase.auth.signUp({
				email,
				password
			});

			if (!error) {
				const populateUser = await supabase
					.from('User')
					.insert([{ id: data.user?.id, name: name, email: email }]);

				if (!error) {
					$user = { id: data.user?.id, name: name, email: email };
					goto('/forms');
				} else {
					console.error('signup failed: ' + populateUser.error?.message);
				}
			} else {
				console.error('signup failed: ' + error.message);
			}
		} else {
			alert('please use your vit student email id');
		}
	};

	const handleLogin = async () => {
		if (/^[a-zA-Z0-9._%+-]+@vitstudent\.ac\.in$/.test(email)) {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password
			});
			if (!error) {
				$user = { id: data.user.id, name: name, email: email };
				goto('/forms');
			} else {
				console.error('login failed: ' + error.message);
			}
		} else {
			alert('please use your vit student email id');
		}
	};
</script>

<section class="flex items-center justify-center w-full min-h-screen p-6 md:p-0">
	<div class="w-[25rem] border-[1px] border-primary rounded-lg bg-background-darker p-4">
		<span class="text-center w-full flex justify-center text-2xl font-semibold"
			>{action.charAt(0).toUpperCase() + action.slice(1)}
		</span>
		<form class="flex flex-col gap-4">
			{#if action !== 'login'}
				<div transition:slide class="flex flex-col space-y-2">
					<label for="name" class="text-base">Name</label>
					<input
						bind:value={name}
						type="text"
						name="name"
						placeholder="Enter your name"
						class="p-1 px-2 rounded-lg bg-background border-2 border-background-lighter focus:border-background-lighter"
					/>
				</div>
			{/if}
			<div class="flex flex-col space-y-2">
				<label for="email" class="text-base">Email</label>
				<input
					bind:value={email}
					type="email"
					name="email"
					placeholder="Enter your email"
					class="p-1 px-2 rounded-lg bg-background border-2 border-background-lighter focus:border-background-lighter"
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<label for="password" class="text-base">Name</label>
				<input
					bind:value={password}
					type="password"
					name="password"
					placeholder="Enter your password"
					class="p-1 px-2 rounded-lg bg-background border-2 border-background-lighter focus:border-background-lighter"
				/>
			</div>
		</form>
		<div class="flex justify-between mt-2 opacity-50">
			<button
				on:click|preventDefault={() => {
					action = 'login';
				}}>login</button
			>
			<button
				on:click|preventDefault={() => {
					action = 'signup';
				}}>signup</button
			>
		</div>
		<div class="mt-4">
			<button
				on:click|preventDefault={async () => {
					if (action === 'login') {
						await handleLogin();
					} else {
						await handleSignup();
					}
				}}
				class="w-full text-center p-2 rounded-lg bg-primary bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 border-background-lighter text-lg font-semibold"
				>{action}</button
			>
		</div>
	</div>
</section>
