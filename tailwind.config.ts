import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'wine-primary': '#722F37',     // Deep burgundy
                'wine-secondary': '#8B4049',   // Lighter burgundy
                'wine-accent': '#D4AF37',      // Gold
                'bg-dark': '#1a1a1a',          // Deep dark background
                'bg-darker': '#0f0f0f',        // Even darker
                'text-light': '#f5f5f5',       // Off-white text
            },
            fontFamily: {
                serif: ['var(--font-cinzel)', 'serif'],
                sans: ['var(--font-inter)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
