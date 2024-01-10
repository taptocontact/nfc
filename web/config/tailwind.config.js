/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ['src/**/*.{js,jsx,ts,tsx}'],
  purge: {
    content: [
      'src/**/*.{js,jsx,ts,tsx}', // Include all JS/JSX/TS/TSX files in src folder
      '!src/components/PortfolioCell/**/*.{js,jsx,ts,tsx}', // Exclude files in excludeFolder
      '!src/components/PortfolioCell/*.{js,jsx,ts,tsx}', // Exclude files in excludeFolder
    ],
  },
  theme: {
    extend: {
      gridTemplateColumns:{
        '20': 'repeat(20, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

