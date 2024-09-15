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
        'custom-red': '#FF5555',
        'custom-yellow': '#FFB21E',
        'custom-green': '#00BB8F',
        'custom-blue-two': '#1125D6'
        
        
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
  safelist: [
    'text-custom-red',
    'text-custom-yellow',
    'text-custom-green',
    'text-custom-blue-two',
    'bg-rose-50',
    'bg-amber-50',
    'bg-green-50',
    'bg-indigo-50',
  ],

}

