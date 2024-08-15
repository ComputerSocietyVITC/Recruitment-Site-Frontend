<script lang="ts">
	import Marquee from 'svelte-fast-marquee';

	export let direction: 'left' | 'right' = 'left';
</script>

<Marquee
	class="bg-foreground text-background font-semibold text-lg"
	gap="1rem"
	gradient={true}
	{direction}
	speed={40}
>
	{#each { length: 6 } as _}
		<span>we</span>
		<span>build</span>
		<span>what</span>
		<span>you</span>
		<span>use</span>
		<span>|</span>
	{/each}
</Marquee>
