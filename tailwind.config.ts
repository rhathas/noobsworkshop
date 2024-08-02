import type { Config } from "tailwindcss"
import Typography from "@tailwindcss/typography"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#66FCF1",
        secondary: "#45A29E",
        "mid-gray": "#C5C6C8",
      },
      backgroundColor: {
        card: "#0B0C10",
        root: "#202833",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xl: "10240px",
        "2xl": "1024px",
      },
    },
  },
  plugins: [Typography],
}
export default config
