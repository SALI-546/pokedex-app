// src/app/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import PokemonCard from '@/components/buttons/cards/PokemonCard';
import { getPokemonList } from '@/services/pokemonService';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<{ id: number; name: string; image: string }[]>([]);
  const [filteredList, setFilteredList] = useState<{ id: number; name: string; image: string }[]>([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemonList = useCallback(async (pageNum: number) => {
    setIsLoading(true);
    try {
      const offset = (pageNum - 1) * limit;
      const data = await getPokemonList(limit, offset);
      const newPokemons = data.results.map(result => {
        if (!result.url) throw new Error('URL manquante pour un Pokémon');
        const id = parseInt(result.url.split('/').filter(Boolean).pop()!);
        return {
          id,
          name: result.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });

      setPokemonList(prev => {
        if (pageNum === 1) return newPokemons;
        return [...prev, ...newPokemons];
      });
      setFilteredList(prev => {
        if (pageNum === 1) return newPokemons;
        return [...prev, ...newPokemons];
      });

      setHasMore(data.results.length === limit && data.next !== null);
    } catch (error) {
      console.error('Error loading Pokémon list:', error);
    } finally {
      setIsLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchPokemonList(1);
  }, [fetchPokemonList]);

  const loadMore = () => {
    if (!hasMore || isLoading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    fetchPokemonList(nextPage);
  };

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredList(pokemonList);
      return;
    }
    const normalizedQuery = query.toLowerCase();
    const filtered = pokemonList.filter(pokemon => {
      if (normalizedQuery.startsWith('#')) {
        const num = parseInt(normalizedQuery.replace('#', ''));
        return pokemon.id === num;
      }
      return pokemon.name.toLowerCase().includes(normalizedQuery);
    });
    setFilteredList(filtered);
  };

  const handleSort = (option: string) => {
    const sorted = [...filteredList].sort((a, b) => {
      if (option === 'name') return a.name.localeCompare(b.name);
      return a.id - b.id;
    });
    setFilteredList(sorted);
  };

  return (
    <div className="bg-background min-h-screen">
      <Header onSearch={handleSearch} onSort={handleSort} />
      <div className="grid grid-cols-3 gap-4 p-4">
        {filteredList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center p-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
            onClick={loadMore}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Charger plus'}
          </button>
        </div>
      )}
    </div>
  );
}