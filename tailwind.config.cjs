/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			flex: {
				2: "2 2 0%",
				3: "3 3 0%",
				4: "4 4 0%",
				5: "5 5 0%",
				6: "6 6 0%",
			},
			content: {
				none: "''",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
			},
			animation: {
				fadeIn: "fadeIn 1s 1500ms linear forwards",
			},
		},
		fontFamily: {
			ubuntu: "'Ubuntu', 'Roboto', 'Racing Sans One', sans-serif",
			roboto: "'Roboto', 'Ubuntu', 'Racing Sans One', sans-serif",
			"racing-sans-one": "'Racing Sans One', 'Ubuntu', 'Roboto', cursive",
		},
		colors: {
			white: "#FFFFFF",
			black: "#000000",
			gray: "#EAEAEA",
			purple: "#5E2E53",
			pink: "#E1A1E9",
			transparent: "transparent",
		},
		fontSize: {
			base: "1.125rem",
			lg: "1.5rem",
			xl: "2.25rem",
		},
	},
	plugins: [],
};
