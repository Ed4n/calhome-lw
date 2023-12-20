/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"lw-blue": "#00117A",
				"lw-blue-2": "#486BD9",
				"lw-blue-3": "#027FF9",
				"lw-orange-1": "#FCA311",
				"lw-orange-2": "#FFC30F",
				"lw-orange-3": "#F5DF80",
			},

			screens: {
				"xs": "450px",
			}
		},
	},
	plugins: [],
}
