import { getPokemonDetails, getPokemonSpecies, transformPokemonDetails } from '@/services/pokemonService';
import PokemonDetails from '@/components/buttons/cards/PokemonDetails';
import { PokemonDetails as PokemonDetailsType } from '@/types/pokemon';


interface PokemonPageProps {
  params: Promise<{ id: string }>;
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  
  if (isNaN(id) || id < 1 || id > 1010) {
    return <div>Pokémon ID invalide</div>;
  }

  try {
    const [pokemonData, speciesData] = await Promise.all([
      getPokemonDetails(id),
      getPokemonSpecies(id),
    ]);
    const pokemon: PokemonDetailsType = transformPokemonDetails(pokemonData, speciesData);

    return <PokemonDetails pokemon={pokemon} />; 
  } catch (error) {
    console.error(`Error loading Pokémon details for ID ${id}:`, error);
    return <div>Erreur lors du chargement des détails du Pokémon</div>;
  }
}