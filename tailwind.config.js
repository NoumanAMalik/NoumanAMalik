/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#202225",
                secondary: "#5865F2",
            },
        },
    },
    plugins: [],
};
