/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        neonColor: '#d7fe51',
      },
   
      fontSize: {
        'zero': '0em',
      },

      spacing: {
        '150': '99em'
      },
      
        
      letterSpacing: {
        widestproduct: '0.5em',
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      LeagueSpartan: ['League Spartan', 'sans-serif']
    },
 
  },
  plugins: [],
}