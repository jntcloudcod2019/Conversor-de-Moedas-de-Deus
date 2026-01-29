/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Cores customizadas
      colors: {
        'wl-neutral': {
          200: '#e5e5e5',
          400: '#a3a3a3',
          600: '#525252',
          700: '#404040',
          950: '#0a0a0a',
        },
        'icon-gray': '#888888',
        'icon-dark': '#525252',
      },
      // Fontes
      fontFamily: {
        inter: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      // Animações
      keyframes: {
        'skeleton-wave': {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: 'calc(200px + 100%) 0' },
        },
        'logo-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'skeleton-wave': 'skeleton-wave 1.5s ease-in-out infinite',
        'logo-spin': 'logo-spin 20s linear infinite',
      },
      // Backgrounds para skeleton
      backgroundImage: {
        'skeleton-light': 'linear-gradient(90deg, #f0f0f0 0px, #e0e0e0 40px, #f0f0f0 80px)',
        'skeleton-dark': 'linear-gradient(90deg, #2a2a2a 0px, #3a3a3a 40px, #2a2a2a 80px)',
      },
      backgroundSize: {
        'skeleton': '200px 100%',
      },
      // Tamanhos de ícones
      spacing: {
        'icon-sm': '18px',
        'icon-md': '20px',
        'icon-lg': '22px',
        'icon-xl': '30px',
      },
      // Tamanhos de flags
      width: {
        'flag-sm': '18px',
        'flag-md': '20px',
        'flag-lg': '23px',
        'flag-xl': '30px',
      },
      height: {
        'flag-sm': '18px',
        'flag-md': '20px',
        'flag-lg': '23px',
        'flag-xl': '30px',
      },
      // Tokens para dropdown/listbox
      minWidth: {
        'listbox': '120px',
      },
      zIndex: {
        'dropdown': '9999',
      },
      maxHeight: {
        'listbox': '400px',
      },
      // Scrollbar customizada
      scrollbar: {
        thin: 'thin',
      },
    },
  },
  plugins: [
    // Plugin para scrollbar customizada
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#4b4949 transparent',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#dcdcdc',
            'border-radius': '4px',
          },
        },
      });
    },
  ],
}
