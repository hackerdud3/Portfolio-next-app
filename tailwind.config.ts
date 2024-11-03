import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ECEDEE",
        primary: {
          50: "#E6F1FE",
          100: "#CCE4FD",
          200: "#99C9FB",
          300: "#66AEF9",
          400: "#3393F7",
          500: "#0072F5",
          600: "#005BC4",
          700: "#004493",
          800: "#002E62",
          900: "#001731",
          DEFAULT: "#0072F5",
          foreground: "#FFFFFF",
        },
        focus: "#0072F5",
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(0, 114, 245, 0.3)" },
          "100%": { boxShadow: "0 0 30px rgba(0, 114, 245, 0.6)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#000000",
            foreground: "#ECEDEE",
            primary: {
              50: "#E6F1FE",
              100: "#CCE4FD",
              200: "#99C9FB",
              300: "#66AEF9",
              400: "#3393F7",
              500: "#0072F5",
              600: "#005BC4",
              700: "#004493",
              800: "#002E62",
              900: "#001731",
              DEFAULT: "#0072F5",
              foreground: "#FFFFFF",
            },
            focus: "#0072F5",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
export default config;
