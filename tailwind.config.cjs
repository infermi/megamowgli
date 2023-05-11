/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

	theme: {
		extend: {
			fontFamily: {
				varela: "Varela Round",
				sans: "Open Sans",
				heebo: "Heebo",
			},
			colors: {
				primary: "#34B7F3",
				dark_primary: "#2673ad",
				text_color: "#ebe6e0",
				home: "#c8e5fa",
				"white-secondary": "#f9f9f9",
			},

			variants: {
				animation: ["motion-safe"],
			},
			animation: {
				fadeIn: "fadeIn 0.3s ease-in forwards ",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0, transform: "translate(0, 30px)" },
					"100%": { opacity: 1 },
				},
			},
		},
	},
	plugins: [require("tailwindcss-animation-delay")],
};
