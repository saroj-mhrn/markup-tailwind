const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/.{html,js}", "./src/**/*.html"],

  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
      mono: ['Roboto Mono', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        hc: {
          orange: "#dd4a01",
          navy: "#221b47",
          white: "#fff",
          black: "#000",
          'light-grey': "#f3f3f5",
        }
      },

      fontSize: {
        xl: ["120px", 1.1],
        lg: ["58px", 1.1],
        md: ["38px", 1.1],
        sm: ["28px", 1.1],
        'p-lg': ["24px", 1.4],
        'p-sm': ["14px", 1.4],
        'ph': ['12px', { lineHeight: '1.1', letterSpacing: '1.1px' }],
      },
    },
  },
};
