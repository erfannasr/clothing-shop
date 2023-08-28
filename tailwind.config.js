const { default: plugin } = require("tailwindcss");

module.exports={
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme:{
    fontFamily:{
      primary:'Poppins'
    },
    container:{
      padding:{
        DEFAULT:'30px',
        lg:'0'
      }
    },
    screen:{
      sm:'640px',
      md:'768px',
      lg:'1024px',
      xl:'1440px',

    },
    extend:{
      colors:{
        primary:'#222222',
        secoundary:'#F5E6E0'
      },
      backgroundImage: {
        hero: "url('./img/bg_hero.svg')",
      },
    },
  },
  plugins:[],
};