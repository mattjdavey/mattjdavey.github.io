/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{razor,html}'], // add this line
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                'bounce-in': {
                    '0%': {transform: 'translateX(100%) scale(0.9)', opacity: '0'},
                    '60%': {transform: 'translateX(-10px) scale(1.05)', opacity: '1'},
                    '100%': {transform: 'translateX(0) scale(1)', opacity: '1'},
                },
                'shimmer': {
                    '0%': {transform: 'translateX(-100%)'},
                    '100%': {transform: 'translateX(100%)'},
                }
            },
            animation: {
                'bounce-in': 'bounce-in 0.5s ease-out',
                'shimmer': 'shimmer 3.5s forwards',
            }
        }
    },
    plugins: [],
}