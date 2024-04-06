/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#1B1B1B',
				green: '#31CF9F',
				gray: '#343434',
				darker_gray: '#202020',
				teal: '#358B9B',
				gold: '#C5DA45'
			},
			fontFamily: {
				main: ['IBM Plex Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
