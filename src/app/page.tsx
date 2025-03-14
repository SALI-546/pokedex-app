'use client';

import { useState } from 'react';
import { mockPokemonList } from '@/mocks/pokemonData';
import Header from '@/components/Header';
import PokemonCard from '@/components/cards/PokemonCard';

export default function Home() {
  const [pokemonList] = useState(mockPokemonList); // Supprimer setPokemonList
  const [filteredList, setFilteredList] = useState(mockPokemonList);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredList(pokemonList);
      return;
    }
    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const handleSort = (option: string) => {
    const sorted = [...filteredList].sort((a, b) => {
      if (option === 'name') {
        return a.name.localeCompare(b.name);
      }
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
    </div>
  );
}