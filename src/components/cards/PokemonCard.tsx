import Image from 'next/image';
import Link from 'next/link';


interface Pokemon {
  id: number;
  name: string;
  image: string;
}

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="bg-white rounded-lg p-4 shadow-2dp relative overflow-hidden border border-gray-300">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#EFEFEF] z-0"></div>
        <span className="text-caption text-gray-medium absolute top-2 right-2 z-10">#{pokemon.id.toString().padStart(3, '0')}</span>
        <Image
          src={pokemon.image} 
          alt={pokemon.name}
          width={80} 
          height={80} 
          className="w-20 h-20 mx-auto relative z-10"
        />
        <h3 className="text-body1 font-bold text-center capitalize relative z-10 mt-2 text-gray-dark">{pokemon.name}</h3>
      </div>
    </Link>
  );
}