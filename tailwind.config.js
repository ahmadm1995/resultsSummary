/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-blue': '#ECF2FF',
        'custom-light-blue': '#CAC9FF',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
      },
      backgroundImage: {
        'gradient-light-slate-blue': 'linear-gradient(45deg, hsl(252,100%,67%) 0%, hsl(252,100%,50%) 100%)',
        'gradient-light-royal-blue': 'linear-gradient(135deg, hsl(241,81%,54%) 0%, hsl(252,100%,67%) 100%)',
        'circle-gradient': 'radial-gradient(circle, hsla(256, 72%, 46%, 1), hsla(241, 72%, 46%, 0))',

      },
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

