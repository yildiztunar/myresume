/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
      'bannerImg': '0 18px 88px -4px rgba(24, 39, 75, 0.14)',
      'profileImg': '0 8px 28px -6px rgba(24, 39, 75, 0.12)',
    },
    textColor: {
      'greentext': '#CBF281',
      'purpletext': '#4832D3',
      'lilactext': '#C1BAED',
      'graytext': '#777777',
      'whitetext': '#FFFFFF'
    },
    backgroundColor: {
      'greenbg': '#CBF281',
      'purplebg': '#4731D3',
      'bluebg': '#171043',
      'darkgreenbg': '#19210B',
      'darkpurplebg': '#252128',
      'whitebg': '#FFFFFF'
    },
    fontSize: {
      'tiny': '0.875rem', // 14px
      'base': '1rem',   // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem',  // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2rem', //32px
      '5xl': '3rem',    // 48px
      '6xl': '3.375rem'  //54px
    }
  },
  },
  plugins: []
}

