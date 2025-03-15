// src/services/pokemonService.ts
import { PokemonListResponse, PokemonDetailResponse, PokemonSpeciesResponse, PokemonDetails } from '@/types/pokemon';

export const getPokemonList = async (limit = 20, offset = 0): Promise<PokemonListResponse> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) throw new Error('Failed to fetch Pokémon list');
    return response.json();
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (id: number): Promise<PokemonDetailResponse> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (!response.ok) throw new Error(`Failed to fetch Pokémon details for ID ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching Pokémon details for ID ${id}:`, error);
    throw error;
  }
};

export const getPokemonSpecies = async (id: number): Promise<PokemonSpeciesResponse> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    if (!response.ok) throw new Error(`Failed to fetch Pokémon species for ID ${id}`);
    return response.json();
  } catch (error) {
    console.error(`Error fetching Pokémon species for ID ${id}:`, error);
    throw error;
  }
};


export const transformPokemonDetails = (detail: PokemonDetailResponse, species: PokemonSpeciesResponse): PokemonDetails => {
  const description = species.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text || 'No description available';
  return {
    id: detail.id,
    name: detail.name,
    types: detail.types,
    image: detail.sprites.other['official-artwork'].front_default || detail.sprites.front_default,
    weight: detail.weight,
    height: detail.height,
    abilities: detail.abilities.map(a => a.ability.name),
    description: description.replace(/\n/g, ' '), 
    stats: detail.stats.map(s => ({ name: s.stat.name, value: s.base_stat })),
  };
};