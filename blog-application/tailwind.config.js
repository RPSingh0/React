/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                'spin-slow': {
                    '0%': {transform: 'rotate(0deg)'},
                    '100%': {transform: 'rotate(360deg)'},
                },
            },
            animation: {
                'spin-slow': 'spin-slow 10s linear infinite',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
}

