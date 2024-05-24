/** @type {import('tailwindcss').Config} */

import fs from 'fs';

const settings = JSON.parse(fs.readFileSync('settings.json'));

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				...settings.styling.colours
			},
			fontFamily: {
				...settings.styling.fonts
			}
		}
	},
	plugins: []
};
