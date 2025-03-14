import TypeBadge from '../ui/TypeBadge';
import StatBar from '../ui/StatBar';

export default function PokemonDetails({ pokemon }: { pokemon: any }) {
  
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

  return (
    <div className="min-h-screen flex flex-col">
      
      <div
        className={`p-4 ${getTypeColor(pokemon.types[0].type.name)} relative overflow-hidden`}
        style={{
          backgroundColor: getTypeColorValue(pokemon.types[0].type.name), 
        }}
      >
        
        <img
          src="/Pokeball.png"
          alt="Pokeball Background"
          className="absolute w-[208px] h-[208px] opacity-50"
          style={{
            left: 'calc((100% - 160px)/2 + 80px)', 
            top: '70px', 
            zIndex: 0, 
            tintColor: getTypeColorValue(pokemon.types[0].type.name), 
          }}
        />

        
        <div className="relative z-10">
          
          <div className="flex justify-between items-center">
            <h1 className={`text-headline font-bold text-white capitalize`}> 
              {pokemon.name}
            </h1>
            <span className={`text-headline font-bold text-white`}> 
              #{pokemon.id.toString().padStart(3, '0')}
            </span>
          </div>

          
          <div className="flex justify-center mt-4 relative z-10">
            <img src={pokemon.image} alt={pokemon.name} className="w-40 h-40 opacity-70" />
          </div>

          
          <div className="flex justify-center space-x-2 mt-4">
            {pokemon.types.map((type: any) => (
              <TypeBadge key={type.type.name} type={type.type.name} />
            ))}
          </div>

         
          <h2 className={`text-subtitle1 font-bold ${getTextColor(pokemon.types[0].type.name)} mt-2 text-center`}>
            About
          </h2>
        </div>
      </div>

      
      <div className="bg-white rounded-t-3xl p-6 flex-1">
   
        <div className="flex justify-between text-body2 mt-2">
          <div className="text-center">
            <div className="flex justify-center items-center">
              <img
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
              <img
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