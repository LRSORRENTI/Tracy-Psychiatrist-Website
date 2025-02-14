/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                cormorant: ["Cormorant", "serif"],
            },
        },
    },
    plugins: [],
};

export default config;
