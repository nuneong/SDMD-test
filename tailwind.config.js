/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        background: "var(--background)",
      },
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        flow: "flow 2s linear infinite",
        scan: "scan 2s linear infinite",
        "scan-doc": "scan-doc 2s linear infinite",
        "scan-wait": "scan-wait 4s linear infinite",
        "pop-data": "pop-data 2s linear infinite",
        "pop-data-wait": "pop-data-wait 4s linear infinite",
        draw: "draw 3s ease-in-out infinite",
        "draw-fast": "draw 1s ease-out forwards",
        equalizer: "equalizer 1s ease-in-out infinite",
        "scroll-up": "scroll-up 5s linear infinite",
        "pop-in":
          "pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
        shimmer: "shimmer 2s linear infinite",
        "fly-data": "fly-data 2s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        flow: {
          "0%": { "background-position": "0% center" },
          "100%": { "background-position": "200% center" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "scan-doc": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "scan-wait": {
          "0%": { transform: "translateY(-100%)" },
          "50%": { transform: "translateY(400%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "pop-data": {
          "0%, 30%": { opacity: "0", transform: "scale(0.5)" },
          "35%": { opacity: "1", transform: "scale(1.1)" },
          "40%": { transform: "scale(1)" },
          "80%": { opacity: "1", transform: "scale(1)" },
          "90%, 100%": { opacity: "0", transform: "scale(0.5)" },
        },
        "pop-data-wait": {
          "0%, 15%": { opacity: "0", transform: "scale(0.5)" },
          "17.5%": { opacity: "1", transform: "scale(1.1)" },
          "20%": { transform: "scale(1)" },
          "40%": { opacity: "1", transform: "scale(1)" },
          "45%, 100%": { opacity: "0", transform: "scale(0.5)" },
        },
        draw: {
          "0%": { strokeDasharray: "1000", strokeDashoffset: "1000" },
          "100%": { strokeDasharray: "1000", strokeDashoffset: "0" },
        },
        equalizer: {
          "0%, 100%": { height: "20%" },
          "50%": { height: "100%" },
        },
        "scroll-up": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25%)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          from: { "background-position": "0 0" },
          to: { "background-position": "-200% 0" },
        },
        "fly-data": {
          "0%": { transform: "translate(0, 0) scale(1)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": {
            transform: "translate(120px, -130px) scale(0.5)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(120px, -130px) scale(0)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
