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
      'languagetextgreen': '#CAF181',
      'languagetextgray': '#D9D9D9',
      'greentext': '#CBF281',
      'purpletext': '#4832D3',
      'lilactext': '#C1BAED',
      'graytext': '#777777',
      'whitetext': '#FFFFFF',
      'darkgraytext': '#383838',
      'linktext': '#120B39',
      'emailtext': '#4731D3',
      'footerlilactext': '#8F88FF',
      'buttontext': '#3730A3',
      'darkpurpletext': '#252128'
    },
    backgroundColor: {
      'greenbg': '#CBF281',
      'purplebg': '#4731D3',
      'bluebg': '#171043',
      'darkgreenbg': '#1A210B',
      'darkpurplebg': '#252128',
      'whitebg': '#FFFFFF',
      'lilacbg': '#8173DA'
    },
    fontSize: {
      'tiny': '0.875rem', // 14px
      'base': '1rem',   // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem',  // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2rem', //32px
      '4.5xl': '2.188rem', //35px
      '5xl': '3rem',    // 48px
      '6xl': '3.375rem'  //54px
    },
    borderRadius: {
      'rounded-md': '0.375rem', //6px
      'rounded-lg': '0.6rem', //8px
      'rounded-xl': '0.75rem',	//12px
      'rounded-2xl': '1.1rem', //18px
      'rounded-3xl': '1.438', //23px
      'rounded-l-xl': '0.75rem', //12px top-left and bottom-left
      'rounded-r-xl': '0.75rem', //12px top-right and bottom-right
    },
    borderColor: {
      'purpleborder': '#4832D3',
      'buttonborder': '#3730A3'
    }
  },
  },
  plugins: []
}

