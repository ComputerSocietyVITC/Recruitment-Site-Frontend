<script lang="ts">
	import { onMount } from 'svelte';

	import { goto } from '$app/navigation';

	import { submitted } from '$lib/stores';

	onMount(async () => {
		console.log($submitted)
		if ($submitted == false) {
			goto('/form');
		}
	});
</script>

<section class="min-h-screen w-full bg-background flex flex-col gap-12 items-center justify-center">
	<span class="text-2xl text-center font-semibold"
		>thank you for submitting your form <br /> your responses have been saved</span
	>
	<img src="/qrcode.png" alt="" class="w-96 rounded-3xl" />
	<span class="text-2xl text-center font-semibold">
		kindly join the whatsapp group above for further information
	</span>
</section>
