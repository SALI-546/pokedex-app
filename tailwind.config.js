/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Inclut tous les fichiers dans src/
  ],
  theme: {
    extend: {
      colors: {
        // Identity
        primary: '#DC0A2D', 

        // Pokémon Type
        bug: '#A7B723',
        dark: '#755C4C',
        dragon: '#7037FF',
        electric: '#F9CF00',
        fairy: '#E69EAC',
        fighting: '#C12239',
        fire: '#F57D31',
        flying: '#A98FF0',
        ghost: '#70559B',
        normal: '#AAA67F',
        grass: '#74CB48',
        ground: '#DEC16B',
        ice: '#9AD6DF',
        poison: '#A43E9E',
        psychic: '#FB5584',
        rock: '#B69E31',
        steel: '#B7B9CE',
        water: '#6493EB',

        // Grayscale
        'gray-dark': '#212121',
        'gray-medium': '#666666',
        'gray-light': '#EDEDED',
        background: '#EFEFEF',
        white: '#FFFFFF',
      },
      fontSize: {
        headline: ['24px', '32px'],
        subtitle1: ['14px', '16px'],
        subtitle2: ['12px', '16px'],
        subtitle3: ['10px', '16px'],
        body1: ['14px', '16px'],
        body2: ['12px', '16px'],
        body3: ['10px', '16px'],
        caption: ['8px', '12px'],
      },
      boxShadow: {
        '2dp': '0 2px 4px rgba(0,0,0,0.1)',
        '6dp': '0 6px 12px rgba(0,0,0,0.2)',
      },
    },
  },
  plugins: [],
};