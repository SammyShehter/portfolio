/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                mont: ["var(--font-mont)"],
            },
            colors: {
                dark: "#060a17",
                light: "#f1f8f9",
                primary: '#03045e',
                primaryDark: '#90E0EF',
            },
            animation: {
                "spin-slow": "spin 15s linear infinite",
            },
            backgroundImage: {
                customBackgroundLight: 'linear-gradient(to right, #4e54c8, #8f94fb)',
                reverseCustomBackgroundLight: 'linear-gradient(to left, #4e54c8, #8f94fb)',
                reverseCustomBackgroundDark: 'linear-gradient(to left, #373B44, #4286f4)',
                customBackgroundDark: 'linear-gradient(to right, #373B44, #4286f4)',
                circularLight:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#edfafd00 5px,#edfafd00 100px)",

                circularDark:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#060a1700 8px,#060a1700 100px)",

                circularLightLg:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#edfafd 5px,#edfafd 80px)",

                circularDarkLg:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#060a17 5px,#060a17 80px)",

                circularLightMd:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#edfafd 4px,#edfafd 60px)",

                circularDarkMd:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#060a17 4px,#060a17 60px)",

                circularLightSm:
                    "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#edfafd 4px,#edfafd 40px)",

                circularDarkSm:
                    "repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#060a17 4px,#060a17 40px)",
            },
        },
        screens: {
            "2xl": { max: "1535px" },
            xl: { max: "1279px" },
            lg: { max: "1023px" },
            md: { max: "767px" },
            sm: { max: "639px" },
            xs: { max: "479px" },
        },
    },
    plugins: [],
}
