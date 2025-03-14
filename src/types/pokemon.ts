// src/types/pokemon.ts
export interface Pokemon {
    id: number;
    name: string;
    image: string;
  }
  
  export interface PokemonDetails {
    id: number;
    name: string;
    types: { type: { name: string } }[];
    image: string;
    weight: number;
    height: number;
    abilities: string[];
    description: string;
    stats: { name: string; value: number }[];
  }