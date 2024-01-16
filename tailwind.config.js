const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/.{html,js}',
    './src/**/*.html'
  ],
  
  theme: {
    fontFamily: {
      sans: ['nunito-sans', ...defaultTheme.fontFamily.sans],
      mono: ['Roboto Mono', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        'dark-1': '#0E0F10',
        'dark-2': '#1F2124',
      },
      boxShadow: {
        'type-1': '0px 8px 33px rgba(75, 27, 139, 0.15);',
      }
    },
  },
};
