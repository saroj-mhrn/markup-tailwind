const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/.{html,js}',
    './src/**/*.html'
  ],
  
  theme: {
    screens: {
      xs: '375px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',
    },
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
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'empty',
    'read-only',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled',
  ],
};
