/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neugray: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#e0e5ec',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #c3c9d0, -8px -8px 16px #ffffff',
        'neumorph-sm': '5px 5px 10px #c3c9d0, -5px -5px 10px #ffffff',
        'neumorph-inset': 'inset 4px 4px 8px #c3c9d0, inset -4px -4px 8px #ffffff',
        'neumorph-dark': '8px 8px 16px #161a1d, -8px -8px 16px #2c3135',
        'neumorph-dark-sm': '5px 5px 10px #161a1d, -5px -5px 10px #2c3135',
        'neumorph-dark-inset': 'inset 4px 4px 8px #161a1d, inset -4px -4px 8px #2c3135',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};