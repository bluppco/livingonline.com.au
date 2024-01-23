/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

			screens: {

				"mac": "1440px"

			},

			fontFamily: {

				"lato": [ "Lato","sans-serif" ]

			},

			colors: {

				"body": "#ef6d30"

			}
		},
	},
	plugins: [],
}
