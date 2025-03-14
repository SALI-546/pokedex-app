// src/components/cards/PokemonDetails.tsx
import TypeBadge from '../ui/TypeBadge';
import StatBar from '../ui/StatBar';

export default function PokemonDetails({ pokemon }: { pokemon: any }) {
  // Fonction pour obtenir la classe Tailwind de la couleur du type (background)
  const getTypeColor = (type: string): string => {
    const typeColors: { [key: string]: string } = {
      fire: 'bg-fire',
      water: 'bg-water',
      bug: 'bg-bug',
      flying: 'bg-flying',
      electric: 'bg-electric',
      ghost: 'bg-ghost',
      poison: 'bg-poison',
      normal: 'bg-normal',
      psychic: 'bg-psychic',
      steel: 'bg-steel',
      rock: 'bg-rock',
      grass: 'bg-grass',
    };
    return typeColors[type] || 'bg-gray-200';
  };

  // Fonction pour obtenir la classe Tailwind de la couleur du type (texte)
  const getTextColor = (type: string): string => {
    const textColors: { [key: string]: string } = {
      fire: 'text-fire',
      water: 'text-water',
      bug: 'text-bug',
      flying: 'text-flying',
      electric: 'text-electric',
      ghost: 'text-ghost',
      poison: 'text-poison',
      normal: 'text-normal',
      psychic: 'text-psychic',
      steel: 'text-steel',
      rock: 'text-rock',
      grass: 'text-grass',
    };
    return textColors[type] || 'text-gray-700';
  };

  // Fonction pour obtenir la valeur hexadécimale de la couleur du type
  const getTypeColorValue = (type: string): string => {
    const typeColorValues: { [key: string]: string } = {
      fire: '#ff4500',
      water: '#6890f0',
      bug: '#a8b820',
      flying: '#a890f0',
      electric: '#f8d030',
      ghost: '#705898',
      poison: '#a040a0',
      normal: '#a8a878',
      psychic: '#f85888',
      steel: '#b8b8d0',
      rock: '#b8a038',
      grass: '#78c850',
    };
    return typeColorValues[type] || '#e0e0e0';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Section colorée en haut : Image, Badges, Titre About */}
      <div
        className={`p-4 ${getTypeColor(pokemon.types[0].type.name)} relative overflow-hidden`}
        style={{
          backgroundColor: getTypeColorValue(pokemon.types[0].type.name), // Couleur de fond principale
        }}
      >
        {/* Pseudo-élément pour l'image de fond avec opacité et taille Figma */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/Pokeball.png')`,
            backgroundSize: '208px 208px', // Taille selon la première image Figma
            backgroundPosition: '144px 8px', // Position selon la première image Figma
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            opacity: 0.5, // Ajusté pour visibilité (10% était trop faible)
            backgroundColor: getTypeColorValue(pokemon.types[0].type.name), // Teinte l'image avec la couleur du type
            zIndex: 0,
          }}
        />

        {/* Contenu de la section colorée */}
        <div className="relative z-10">
          {/* En-tête : Nom et Numéro */}
          <div className="flex justify-between items-center">
            <h1 className={`text-headline font-bold ${getTextColor(pokemon.types[0].type.name)} capitalize`}>
              {pokemon.name}
            </h1>
            <span className={`text-headline font-bold ${getTextColor(pokemon.types[0].type.name)}`}>
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
          </div>

          {/* Image du Pokémon */}
          <div className="flex justify-center mt-4">
            <img src={pokemon.image} alt={pokemon.name} className="w-40 h-40 opacity-70" />
          </div>

          {/* Badges de type */}
          <div className="flex justify-center space-x-2 mt-4">
            {pokemon.types.map((type: any) => (
              <TypeBadge key={type.type.name} type={type.type.name} />
            ))}
          </div>

          {/* Titre About : Centré et juste en dessous des badges */}
          <h2 className={`text-subtitle1 font-bold ${getTextColor(pokemon.types[0].type.name)} mt-2 text-center`}>
            About
          </h2>
        </div>
      </div>

      {/* Section blanche en bas : Informations, Description, Base Stats */}
      <div className="bg-white rounded-t-3xl p-6 flex-1">
        {/* Informations : Weight, Height, Moves */}
        <div className="flex justify-between text-body2 mt-2">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img
                src="/Vector.png"
                alt="weight"
                width={16}
                height={16}
                style={{ filter: 'grayscale(100%) brightness(0)' }} // Noir pur selon Figma
              />
              <span className="ml-1">{(pokemon.weight / 10).toFixed(1)} kg</span>
            </div>
            <span className="text-caption text-gray-medium">Weight</span>
          </div>
          <div className="border-l border-gray-300 h-10 mx-2"></div>
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img
                src="/Vector (1).png"
                alt="height"
                width={16}
                height={16}
                style={{ filter: 'grayscale(100%) brightness(0)' }} // Noir pur selon Figma
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

        {/* Description */}
        <p className="text-body2 mt-6 text-gray-700">{pokemon.description}</p>

        {/* Base Stats */}
        <section>
          <h2 className="text-subtitle1 font-bold mt-6">Base Stats</h2>
          <div className="mt-4">
            {pokemon.stats.map((stat: any) => (
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