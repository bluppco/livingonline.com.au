/** @type {import('tailwindcss').Config} */

module.exports = {

  	darkMode: ["class"],

  	content: [
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	],

  	prefix: "",

  	theme: {

	container: {
		center: true,
		padding: "2rem",
		screens: {
			"2xl": "1400px",
		},
    },
    extend: {

      	screens: {

			"mac": "1440px"

		},
      	keyframes: {

			"accordion-down": {

				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },

			},
			"accordion-up": {

				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },

			},
      	},
		animation: {

			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",

		},
		fontFamily: {

			'lato': ["Lato","sans-serif"]
		},
		colors: {

			"body": "#EF6D30",
			"lo_orange": "#F6851C",
			"lo_zinc": "#F5F5F5",
			"lo_blue": "#1396DF",
			"lo_light_blue": "#37ADEE"

		}
    },
  },
  plugins: [require("tailwindcss-animate")],
}