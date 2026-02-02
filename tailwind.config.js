/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#25d466",
        "background": "var(--bg-main)",
        "background-dark": "var(--bg-main)", // Alias for backward compatibility during refactor
        "background-card": "var(--bg-card)",
        "foreground": "var(--text-main)",
        "muted": "var(--text-muted)",
        "border-color": "var(--border-color)",
        "whatsapp-dark": "#0b141a",
        "whatsapp-bubble-in": "#202c33",
        "whatsapp-bubble-out": "#005c4b",
      },
      fontFamily: {
        "display": ["Manrope", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px" },
      keyframes: {
        scan: {
          '0%': { top: '0%' },
          '50%': { top: '100%' },
          '100%': { top: '0%' },
        }
      },
      animation: {
        scan: 'scan 3s linear infinite',
      }
    },
  },
  plugins: [],
}
