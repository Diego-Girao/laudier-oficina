/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				sm: "375px",
				// => @media (min-width: 375px) { ... }
			},
		},
	},
	plugins: [require("daisyui")],
}
