/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gold:  { DEFAULT: "#F5C000", dark: "#C99D00", light: "#FFF8D6" },
        kgreen: { DEFAULT: "#1B3A1F", mid: "#2A5530", pale: "#E8F0E9" },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        deva: ["Noto Sans Devanagari", "sans-serif"],
      },
      keyframes: {
        marquee:   { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        fadeUp:    { from: { opacity: 0, transform: "translateY(28px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        blobFloat: { "0%,100%": { transform: "translate(0,0) scale(1)" }, "33%": { transform: "translate(24px,-28px) scale(1.05)" }, "66%": { transform: "translate(-18px,20px) scale(.95)" } },
        waPulse:   { "0%": { transform: "scale(1)", opacity: "0.6" }, "100%": { transform: "scale(1.55)", opacity: "0" } },
        slideIn:   { from: { opacity: 0, transform: "translateY(32px)" }, to: { opacity: 1, transform: "translateY(0)" } },
      },
      animation: {
        marquee:  "marquee 32s linear infinite",
        fadeUp:   "fadeUp .8s cubic-bezier(.4,0,.2,1) both",
        blob1:    "blobFloat 16s ease-in-out infinite",
        blob2:    "blobFloat 20s ease-in-out infinite reverse",
        blob3:    "blobFloat 13s ease-in-out infinite",
        waPulse:  "waPulse 2.5s ease-out infinite",
        slideIn:  "slideIn .6s cubic-bezier(.4,0,.2,1) both",
      },
    },
  },
  plugins: [],
}
