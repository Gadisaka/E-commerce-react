/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
             "./public/index.html"
  ],
  theme: {
    extend: {
      fontSize: {
        '4xl': '2.5rem', // This is 40px, 
        '5xl': '3rem',   // This is 48px,
      },
      fontFamily: {
        'lora': ['Lora', 'serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        'sf-pro': ['"SF Pro Display"', 'sans-serif'],
      },
      boxShadow: {
        custom: '2px 8px 20px 3px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

