// src/services/pokemonService.ts
import { API_CONFIG } from './apiConfig';
import { fetchApi } from '@/lib/api';
import { PokemonListResponse, PokemonDetailResponse, PokemonSpeciesResponse, PokemonDetails } from '@/types/pokemon';


const buildUrl = (endpoint: string, params: Record<string, string | number> = {}): string => {
  const url = new URL(`${API_CONFIG.BASE_URL}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value.toString());
  });
  return url.toString();
};

export const getPokemonList = async (
  limit: number = API_CONFIG.DEFAULT_LIMIT,
  offset: number = API_CONFIG.DEFAULT_OFFSET
): Promise<PokemonListResponse> => {
  try {
    const url = buildUrl('pokemon', { limit, offset });
    return await fetchApi<PokemonListResponse>(url);
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (id: number): Promise<PokemonDetailResponse> => {
  try {
    const url = buildUrl(`pokemon/${id}`);
    return await fetchApi<PokemonDetailResponse>(url);
  } catch (error) {
    console.error(`Error fetching Pokémon details for ID ${id}:`, error);
    throw error;
  }
};

export const getPokemonSpecies = async (id: number): Promise<PokemonSpeciesResponse> => {
  try {
    const url = buildUrl(`pokemon-species/${id}`);
    return await fetchApi<PokemonSpeciesResponse>(url);
  } catch (error) {
    console.error(`Error fetching Pokémon species for ID ${id}:`, error);
    throw error;
  }
};

export const transformPokemonDetails = (
  detail: PokemonDetailResponse,
  species: PokemonSpeciesResponse
): PokemonDetails => {
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