// src/mocks/pokemonData.ts
export const mockPokemonList = [
  { id: 304, name: 'Aron', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png' },
  { id: 1, name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
  { id: 12, name: 'Butterfree', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png' },
  { id: 4, name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
  { id: 132, name: 'Ditto', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' },
  { id: 92, name: 'Gastly', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png' },
  { id: 151, name: 'Mew', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png' },
  { id: 25, name: 'Pikachu', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
  { id: 7, name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
];

export const mockPokemonDetails = [
  {
    id: 1,
    name: 'Bulbasaur',
    types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    weight: 69,
    height: 7,
    abilities: ['Chlorophyll', 'Overgrow'],
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    stats: [
      { name: 'HP', value: 45 },
      { name: 'ATK', value: 49 },
      { name: 'DEF', value: 49 },
      { name: 'SATK', value: 65 },
      { name: 'SDEF', value: 65 },
      { name: 'SPD', value: 45 },
    ],
  },
  {
    id: 4,
    name: 'Charmander',
    types: [{ type: { name: 'fire' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    weight: 85,
    height: 6,
    abilities: ['Mega-Punch', 'Fire-Punch'],
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    stats: [
      { name: 'HP', value: 39 },
      { name: 'ATK', value: 52 },
      { name: 'DEF', value: 43 },
      { name: 'SATK', value: 60 },
      { name: 'SDEF', value: 50 },
      { name: 'SPD', value: 65 },
    ],
  },
  {
    id: 7,
    name: 'Squirtle',
    types: [{ type: { name: 'water' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
    weight: 90,
    height: 5,
    abilities: ['Torrent', 'Rain-Dish'],
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    stats: [
      { name: 'HP', value: 44 },
      { name: 'ATK', value: 48 },
      { name: 'DEF', value: 65 },
      { name: 'SATK', value: 50 },
      { name: 'SDEF', value: 64 },
      { name: 'SPD', value: 43 },
    ],
  },
  {
    id: 12,
    name: 'Butterfree',
    types: [{ type: { name: 'bug' } }, { type: { name: 'flying' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png',
    weight: 320,
    height: 11,
    abilities: ['Compound-Eyes', 'Tinted-Lens'],
    description: 'In battle, it flaps its wings at great speed to release highly toxic dust into the air.',
    stats: [
      { name: 'HP', value: 60 },
      { name: 'ATK', value: 45 },
      { name: 'DEF', value: 50 },
      { name: 'SATK', value: 90 },
      { name: 'SDEF', value: 80 },
      { name: 'SPD', value: 70 },
    ],
  },
  {
    id: 25,
    name: 'Pikachu',
    types: [{ type: { name: 'electric' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    weight: 60,
    height: 4,
    abilities: ['Mega-Punch', 'Pay-Day'],
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    stats: [
      { name: 'HP', value: 35 },
      { name: 'ATK', value: 55 },
      { name: 'DEF', value: 40 },
      { name: 'SATK', value: 50 },
      { name: 'SDEF', value: 50 },
      { name: 'SPD', value: 90 },
    ],
  },
  {
    id: 92,
    name: 'Gastly',
    types: [{ type: { name: 'ghost' } }, { type: { name: 'poison' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/92.png',
    weight: 1,
    height: 13,
    abilities: ['Levitate'],
    description: 'Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.',
    stats: [
      { name: 'HP', value: 30 },
      { name: 'ATK', value: 35 },
      { name: 'DEF', value: 30 },
      { name: 'SATK', value: 100 },
      { name: 'SDEF', value: 35 },
      { name: 'SPD', value: 80 },
    ],
  },
  {
    id: 132,
    name: 'Ditto',
    types: [{ type: { name: 'normal' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
    weight: 40,
    height: 3,
    abilities: ['Limber', 'Imposter'],
    description: 'It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.',
    stats: [
      { name: 'HP', value: 48 },
      { name: 'ATK', value: 48 },
      { name: 'DEF', value: 48 },
      { name: 'SATK', value: 48 },
      { name: 'SDEF', value: 48 },
      { name: 'SPD', value: 48 },
    ],
  },
  {
    id: 151,
    name: 'Mew',
    types: [{ type: { name: 'psychic' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png',
    weight: 40,
    height: 4,
    abilities: ['Synchronize'],
    description: 'When viewed through a microscope, this Pokémon’s short, fine, delicate hair can be seen.',
    stats: [
      { name: 'HP', value: 100 },
      { name: 'ATK', value: 100 },
      { name: 'DEF', value: 100 },
      { name: 'SATK', value: 100 },
      { name: 'SDEF', value: 100 },
      { name: 'SPD', value: 100 },
    ],
  },
  {
    id: 304,
    name: 'Aron',
    types: [{ type: { name: 'steel' } }, { type: { name: 'rock' } }],
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/304.png',
    weight: 600,
    height: 4,
    abilities: ['Sturdy', 'Rock-Head'],
    description: 'It eats iron ore - and sometimes railroad tracks - to build up the steel armor that protects its body.',
    stats: [
      { name: 'HP', value: 50 },
      { name: 'ATK', value: 70 },
      { name: 'DEF', value: 100 },
      { name: 'SATK', value: 40 },
      { name: 'SDEF', value: 40 },
      { name: 'SPD', value: 30 },
    ],
  },
];