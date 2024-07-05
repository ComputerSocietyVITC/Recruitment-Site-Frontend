<script>
	import '../app.css';

	import { onMount } from 'svelte';

	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores';

	import Navbar from '$lib/components/home/Navbar.svelte';

	onMount(async () => {
		const { data } = await supabase.auth.getUser();

		if (data.user) {
			let user_data = await supabase.from('User').select().eq('email', data.user.email).single();
			$user = { id: user_data.data.id, name: user_data.data.name, email: user_data.data.email };
		}
	});
</script>

<section
	class="bg-background text-foreground min-h-screen min-w-screen font-main mx-auto md:w-[80%] p-4 overflow-hidden"
>
	<Navbar />
	<div class="flex-grow">
		<slot />
	</div>
</section>
