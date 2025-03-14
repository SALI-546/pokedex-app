// src/app/pokemon/[id]/page.tsx
import { mockPokemonDetails } from '@/mocks/pokemonData';
import PokemonDetails from '@/components/cards/PokemonDetails';
import ChevronButton from '@/components/buttons/ChevronButton';

export default function PokemonPage({ params }: { params: { id: string } }) {
  const pokemon = mockPokemonDetails.find(p => p.id === parseInt(params.id));
  if (!pokemon) return <div>Pokémon not found</div>;

  return (
    <div className="min-h-screen">
      <div className="flex justify-between p-4">
        <ChevronButton direction="left" currentId={parseInt(params.id)} />
        <ChevronButton direction="right" currentId={parseInt(params.id)} />
      </div>
      <PokemonDetails pokemon={pokemon} />
    </div>
  );
}