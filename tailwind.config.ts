import type { Config } from "tailwindcss"
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: { 'sm': '520px', 'md': '750px', 'lg': '1000px', 'xl': '1280px', '2xl': '1550px', '3xl': '1800px', '4xl': '2300px' },
    colors: {
      "text": "#111827",
      "fill": "#1e293b",
      "text-light": "#6b7280",
      "bg": "#f3f4f6",
      "border": "#d1d5db",
      // Define primary color
      "primary": "#059669",
    },
  },
  plugins: [],
}

export default config
