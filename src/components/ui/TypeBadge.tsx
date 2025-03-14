// src/components/ui/TypeBadge.tsx
export default function TypeBadge({ type }: { type: string }) {
  return (
    <span className={`px-3 py-1 rounded-full text-body2 capitalize text-white ${getTypeColor(type)}`}>
      {type}
    </span>
  );
}

const getTypeColor = (type: string) => {
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
  return typeColors[type] || 'bg-gray-500';
};