<script lang="ts">
	import settings from '$lib/settings';
</script>

<footer
	class="text-white flex flex-col gap-2 justify-center items-center w-full py-4 text-center"
	id="contacts"
>
	<span class="text-lg text-center"
		>Got any questions or feedback? We would love to hear from you!</span
	>
	<div class="flex gap-4">
		<a href={settings.club.mediaPresence.instagram} class="text-2xl"
			><i class="fa-brands fa-instagram"></i></a
		>
		<a href={settings.club.mediaPresence.linkedin} class="text-2xl"
			><i class="fa-brands fa-linkedin-in"></i></a
		>
		<a href={settings.club.mediaPresence.discord} class="text-2xl"
			><i class="fa-brands fa-discord"></i></a
		>
	</div>
	<span class="text-sm">&copy; {settings.club.name}, 2024-25. All rights reserved.</span>
	<span class="text-sm"
		>Made with blood, sweat and tears by <a href="https://adityajyoti.com"
			><strong>Aditya Jyoti</strong></a
		></span
	>
</footer>
