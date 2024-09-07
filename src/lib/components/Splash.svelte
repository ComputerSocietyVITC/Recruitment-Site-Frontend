<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="flex md:flex-row flex-col md:gap-20 gap-8 items-center">
	<section class="md:w-[50%]">
		<div class="flex flex-col gap-4 md:text-left text-center">
			<span class="font-header md:text-8xl text-6xl font-extrabold tracking-wider" id="splash-text"
				>IEEE <br /> COMPUTER <br /> SOCIETY
			</span>
			<span class="text-lg">
				An active club that plays a key role in shaping the college's infrastructure by supporting
				major events like TechnoVIT, Vibrance, and Voyage. Get hands-on experience in building
				products from scratch, with regular workshops, seminars, and project showcases to help you
				grow.
			</span>
			<div class="flex md:flex-row flex-col gap-4 items-center md:gap-6 md:text-3xl text-2xl">
				<span> Recruitment is Closed </span>
			</div>
		</div>
	</section>
	<section class="flex flex-col gap-6 md:w-[50%]">
		<div class="flex justify-around md:-translate-x-24 -translate-x-4 md:gap-0 gap-4">
			<div>
				<img
					src="{base}/splash/gif1.gif"
					alt="gif1"
					class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-purple-400"
				/>
			</div>
			<div>
				<img
					src="{base}/splash/gif2.gif"
					alt="gif2"
					class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-green-400"
				/>
			</div>
		</div>
		<div class="flex justify-around md:translate-x-12 translate-x-4 md:gap-0 gap-4">
			<div>
				<img
					src="{base}/splash/gif3.gif"
					alt="gif3"
					class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-orange-400"
				/>
			</div>
			<div>
				<img
					src="{base}/splash/gif4.gif"
					alt="gif4"
					class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-blue-400"
				/>
			</div>
		</div>
		<div class="flex justify-around md:-translate-x-12 -translate-x-4 md:gap-0 gap-4">
			<div>
				<img
					src="{base}/splash/gif5.gif"
					alt="gif5"
					class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-cyan-300"
				/>
			</div>
			<div>
				<img
					src="{base}/splash/gif6.gif"
					alt="gif6"
					class="w-80 rounded-[3rem] border-b-[6px] border-r-[6px] border-yellow-400"
				/>
			</div>
		</div>
	</section>
</section>

<style>
	#splash-text {
		background-image: url('/giphy.gif');
		background-size: cover;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}
</style>
