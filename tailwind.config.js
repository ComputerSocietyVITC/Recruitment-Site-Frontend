/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#1B1B1B',
				green: '#31CF9F',
				gray: '#343434',
				teal: '#358B9B'
			},
			fontFamily: {
				main: ['IBM Plex Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
