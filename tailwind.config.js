/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F4C3A",
          deep: "#0a3328",
          foreground: "#F8F6F2",
        },
        secondary: {
          DEFAULT: "#D4A373",
          foreground: "#3a2a1a",
        },
        accent: {
          DEFAULT: "#E76F51",
          foreground: "#F8F6F2",
        },
        background: "#F8F6F2",
        foreground: "#1A1A1A",
        muted: {
          DEFAULT: "#ede9e3",
          foreground: "#6b6050",
        },
        border: "#dcd5ca",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        elegant: "0 20px 60px -20px rgba(15, 76, 58, 0.28)",
        soft: "0 8px 30px -12px rgba(26,26,26,0.18)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideRight: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both",
        fadeIn: "fadeIn 0.6s ease both",
        scaleIn: "scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
}
