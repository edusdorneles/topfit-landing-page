/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#c60038",
                primaryHover: "#b00032",
                secondary: "#1e1e1e",
                secondaryHover: "#151515",
                white: "#f1f0eb"
            }
        }
    },
    plugins: []
};
