import Image from 'next/image';
import Link from 'next/link';
import TypeBadge from '../../ui/TypeBadge';
import StatBar from '../../ui/StatBar';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: { type: { name: string } }[];
  weight: number;
  height: number;
  abilities: string[];
  description: string;
  stats: { name: string; value: number }[];
}

export default function PokemonDetails({ pokemon }: { pokemon: Pokemon }) {
  const getTypeColorValue = (type: string): string => {
    const typeColorValues: { [key: string]: string } = {
      fire: '#F57D31',
      water: '#6493EB',
      bug: '#A7B723',
      flying: '#A98FF0',
      electric: '#F9CF00',
      ghost: '#70559B',
      poison: '#A43E9E',
      normal: '#AAA67F',
      psychic: '#FB5584',
      steel: '#B7B9CE',
      rock: '#B69E31',
      grass: '#74CB48',
    };
    return typeColorValues[type] || '#e0e0e0';
  };

  const typeColor = getTypeColorValue(pokemon.types[0].type.name);

  const prevId = pokemon.id - 1 < 1 ? 1 : pokemon.id - 1;
  const nextId = pokemon.id + 1 > 1010 ? 1010 : pokemon.id + 1;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: typeColor }}>
      <div className="p-4 relative">
        {/* Pokéball en arrière-plan */}
        <Image
          src="/Pokeball.svg"
          alt="Pokeball Background"
          width={206}
          height={208}
          className="absolute w-[206px] h-[208px] opacity-30 z-0"
          style={{
            left: 'calc(50% - 103px + 40px)',
            top: '20px',
          }}
        />

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Redirection vers la page d'accueil (/) au lieu du Pokémon précédent */}
            <Link href="/">
              <Image
                src="/Vector (3).svg"
                alt="Back to Home"
                width={24}
                height={24}
                className="mr-2"
              />
            </Link>
            <h1 className="text-headline font-bold text-white capitalize">{pokemon.name}</h1>
          </div>
          <span className="text-headline font-bold text-white">#{pokemon.id.toString().padStart(3, '0')}</span>
        </div>

        <div className="flex justify-between items-center mt-4 relative z-10">
          <Link href={`/pokemon/${prevId}`}>
            <Image
              src="/Vector (1).svg"
              alt="Previous Pokémon"
              width={24}
              height={24}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
            />
          </Link>
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={160}
            height={160}
            className="w-40 h-40 mx-auto relative z-10 mt-6"
          />
          <Link href={`/pokemon/${nextId}`}>
            <Image
              src="/Vector (2).svg"
              alt="Next Pokémon"
              width={24}
              height={24}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
            />
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-t-3xl p-6 flex-1 relative z-10">
        <div className="flex justify-center mt-2">
          {pokemon.types.map((type: { type: { name: string } }) => (
            <TypeBadge key={type.type.name} type={type.type.name} />
          ))}
        </div>

        <h2 className={`text-subtitle1 font-bold text-blue-700 mt-4 text-center`} style={{ color: typeColor }}>
          About
        </h2>

        <div className="flex justify-between text-body2 mt-4 relative">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <Image
                src="/Vector.png"
                alt="weight"
                width={16}
                height={16}
                style={{ filter: 'grayscale(100%) brightness(0)' }}
              />
              <span className="ml-1">{(pokemon.weight / 10).toFixed(1)} kg</span>
            </div>
            <span className="text-caption text-gray-medium">Weight</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-2"></div>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <Image
                src="/Vector (1).png"
                alt="height"
                width={16}
                height={16}
                style={{ filter: 'grayscale(100%) brightness(0)' }}
              />
              <span className="ml-1">{(pokemon.height / 10).toFixed(1)} m</span>
            </div>
            <span className="text-caption text-gray-medium">Height</span>
          </div>

          <div className="border-l border-gray-300 h-10 mx-2"></div>
          <div className="text-center">
            <span>{pokemon.abilities.join(', ')}</span>
            <br />
            <span className="text-caption text-gray-medium">Moves</span>
          </div>
        </div>

        <p className="text-body2 mt-6 text-gray-700">{pokemon.description}</p>

        <section>
          <h2 className={`text-subtitle1 font-bold text-blue-700 mt-6 text-center`} style={{ color: typeColor }}>
            Base Stats
          </h2>
          <div className="mt-4">
            {pokemon.stats.map((stat: { name: string; value: number }) => (
              <StatBar
                key={stat.name}
                name={stat.name}
                value={stat.value}
                type={pokemon.types[0].type.name}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}