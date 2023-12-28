/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'Linked-Button': '#0766AD',
                'Linked-Button-lighter': '#0981dc',
            },
        },
    },
    plugins: [],
};
