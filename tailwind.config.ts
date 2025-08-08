import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  prefix: '',
  theme: {
    container: {
      screens: {
        xs: '475px',
      },
    },
    extend: {
      colors: {
        'app-text': '#1B2528',
        'app-background': '#FCFDFD',
        'app-highlight': '#386776',
        'app-highlight-16': '#38677629',
        'app-highlight-text': '#3A6C7B',
        'app-thick-highlight': '#4B8B9F',
        'app-thick-highlight-text': '#020303',
        'app-small-text': '#15272D',
        'app-small-text-62': 'hsl(203 29% 13% / 0.62)',
        'app-credit-debit-bg': '#34616f',
        'app-credit-debit-bg-9': 'hsl(198 36% 32% / 0.09)',
        'app-debit': '#C6381B',
        'app-credit': '#087A2E',
        'app-increment-text': '#3E7383',
        'app-table-bg': '#49656E',
        'app-current-tab': '#437D8E',
      },
      fontFamily: {
        sans: ['var(--font-public-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
