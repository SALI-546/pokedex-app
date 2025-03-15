// src/types/pokemon.ts
export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: { front_default: string; other: { 'official-artwork': { front_default: string } } };
  types: { type: { name: string } }[];
  weight: number;
  height: number;
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export interface PokemonSpeciesResponse {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}

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