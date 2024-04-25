/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      // added the custom color to the twailwind
      colors: {
        customGray: '#E5E5E5',
        customBlue: '#E5E5E5', // Add your color here
      },
      backgroundImage: theme => ({
        'gradient-custom': 'linear-gradient(45deg, ' + theme('colors.customGray') + ', ' + theme('colors.customBlue') + ')',
        'hero-pattern': "url('/bg4.png')", // assuming you moved the image to the public directory
      }),
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}