<script lang="ts">
	import Marquee from 'svelte-fast-marquee';

    export let direction: 'left' | 'right' = 'left';
</script>

<Marquee class="bg-foreground text-background font-semibold text-lg" gap="4rem" gradient={true} direction={direction} speed={25}>
	<span>code</span>
	<span>connect</span>
	<span>collaborate</span>
	<span>code</span>
	<span>connect</span>
	<span>collaborate</span>
	<span>code</span>
	<span>connect</span>
	<span>collaborate</span>
	<span>code</span>
	<span>connect</span>
	<span>collaborate</span>
	<span>code</span>
	<span>connect</span>
	<span>collaborate</span>
</Marquee>
