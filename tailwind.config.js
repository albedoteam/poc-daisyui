/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                emerald: {
                    ...require("daisyui/src/theming/themes")["[data-theme=emerald]"],
                    "primary": "#373E42",
                    "secondary": "#e3e3e3",
                    "accent": "#00A49B",
                    "neutral": "#555555",
                    "base-100": "#FEFEFE",
                    "info": "#3abff8",
                    "success": "#36d399",
                    "warning": "#fbbd23",
                    "error": "#f87272"
                }
            }
        ]
    }
}
