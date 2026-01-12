/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        // Light theme colors
        light: {
          bg: {
            primary: "#ffffff",
            secondary: "#f8f9fa",
            tertiary: "#f1f3f4",
          },
          text: {
            primary: "#1a1a2e",
            secondary: "#4a4a5a",
            muted: "#6c757d",
          },
          accent: "#2d3436",
          "accent-hover": "#1a1a2e",
          border: "#e9ecef",
          card: "#ffffff",
        },
        // Dark theme colors
        dark: {
          bg: {
            primary: "#0f0f14",
            secondary: "#1a1a24",
            tertiary: "#242432",
          },
          text: {
            primary: "#f1f3f4",
            secondary: "#b8bcc4",
            muted: "#8a8f98",
          },
          accent: "#e9ecef",
          "accent-hover": "#ffffff",
          border: "#2d2d3a",
          card: "#1a1a24",
        },
      },
      boxShadow: {
        custom: "0 2px 20px rgba(0, 0, 0, 0.08)",
        "custom-lg": "0 20px 60px rgba(0, 0, 0, 0.12)",
        "custom-dark": "0 2px 20px rgba(0, 0, 0, 0.3)",
        "custom-lg-dark": "0 20px 60px rgba(0, 0, 0, 0.4)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-left": "fadeLeft 0.8s ease forwards",
        "bounce-slow": "bounce 2s infinite",
        scroll: "scroll 2s infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scroll: {
          "0%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
          "100%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(15px)",
          },
        },
      },
    },
  },
  plugins: [],
};
