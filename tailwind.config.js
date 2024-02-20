/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      colos: {
      primary: '#000',
      accent: '#f9f9f9',
      secondary: '#ccc',
      dark: '',
      cadangan: '#F1F6F9',
      button: '#FE0000',
      SidebarAccent: '#628dfb',
      sidebarColor: '#121212',
      Info: '#e7e5e4',
      DarkInfo: '#272829',
      CardDashboard: '#F5F5F5',
      DarkCardDashboard: '#272829',
      card: '#BFBFBF',
      white: '#fff',
      animeColor: '#6c7983',
      title: '#856afe'
    }
    }
  },
  plugins: [],
}
