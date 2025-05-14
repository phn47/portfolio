/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0088cc', // Màu chủ đạo
                secondary: '#27ae60', // Màu phụ
                dark: {
                    DEFAULT: '#1a1a1a',
                    '800': '#333333',
                    '700': '#444444'
                },
                light: {
                    DEFAULT: '#f5f5f5',
                    '100': '#fafafa'
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
        },
    },
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/typography'),
    ],
} 