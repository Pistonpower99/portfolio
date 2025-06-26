/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode via adding "dark" class to html element
  content: ["./*.html", "./*.js"],

  theme: {
    extend: {
      colors: {
        // Light mode
        primary: '#1f2937',      // Used in dark mode as bg (gray-800)
        secondary: '#fbbf24',    // For highlights (amber-400)
        background: '#f3f4f6',   // Section backgrounds (gray-100)
        accent: '#1e40af',       // CTA buttons (blue-800)
        text: '#111827',         // Main text (gray-900)
        card: '#ffffff',         // White card backgrounds
        muted: '#6b7280',        // Subtext or secondary text
        border: '#d1d5db',       // Border color (gray-300)

        // Dark mode
        darkbg: '#111827',       // Dark background
        darktext: '#f3f4f6',     // Light text for readability on dark
        darkcard: '#1f2937',     // Card background in dark mode
        darkmuted: '#9ca3af',    // Subtext in dark mode (gray-400)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
