/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mM': '340px',
      'mL': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
     
    },
    extend: {
      textShadow: {
        'sm': '1px 1px 2px rgba(0, 0, 0, 0.25)',
        'md': '2px 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '3px 3px 6px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        cinzel: ["Cinzel Decorative", 'serif'], 
        playfair: ['Playfair Display', 'serif'], 
        playball:['Playball','cursive']
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('tailwindcss-animated')
  ],
}
