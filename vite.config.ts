import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		fs: {
			// Allow serving files from the root directory
			allow: ['.']
		}
	},
	plugins: [sveltekit()]
});
