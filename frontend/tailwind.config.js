/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'popup': 'popup 2s ease-in-out'
            },
            keyframes: {
                popup: {
                    '0%': { opacity: 0 },
                    '10%': { opacity: 0.8 },
                    '50%': { opacity: 0.8 },
                    '100%': { opacity: 0 }
                }
            }
        },
    },
    plugins: [],
}

