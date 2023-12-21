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
			},

			backgroundImage: {
				"buildings-texture": "url('/Buildings_BG.jpg')",
				"fthb-bg-1": "url('/FTHB_BG1.jpg')",
				"fthb-bg-2": "url('/FTHB_BG2.jpg')",
				"fthb-bg-3": "url('/FTHB_BG3.jpg')",

				"oor-bg-1": "url('/OOR_BG1.jpg')",
				"oor-bg-2": "url('/OOR_BG2.jpg')",
				"oor-bg-3": "url('/OOR_BG3.jpg')",
				"oor-bg-4": "url('/OOR_BG4.jpg')",
			}
		},
	},
	plugins: [],
}
