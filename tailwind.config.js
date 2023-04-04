/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			inter: [
				'Inter-Light',
				'Inter-Regular',
				'Inter-Medium',
				'Inter-SemiBold',
				'Inter-Bold',
				'Inter-Black'
			]
		}
	},
	plugins: []
}
