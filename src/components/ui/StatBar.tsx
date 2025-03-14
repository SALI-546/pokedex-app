// src/components/ui/StatBar.tsx
export default function StatBar({ name, value, type }: { name: string; value: number; type: string }) {
  const getStatBarColor = (type: string) => {
    const typeColors: { [key: string]: string } = {
      fire: 'bg-fire text-fire',
      water: 'bg-water text-water',
      bug: 'bg-bug text-bug',
      flying: 'bg-flying text-flying',
      electric: 'bg-electric text-electric',
      ghost: 'bg-ghost text-ghost',
      poison: 'bg-poison text-poison',
      normal: 'bg-normal text-normal',
      psychic: 'bg-psychic text-psychic',
      steel: 'bg-steel text-steel',
      rock: 'bg-rock text-rock',
      grass: 'bg-grass text-grass',
    };
    return typeColors[type] || 'bg-gray-medium text-gray-medium';
  };

  return (
    <div className="flex items-center space-x-2 mb-2">
      <span className={`text-body2 w-16 ${getStatBarColor(type).split(' ')[1]}`}>{name}</span>
      <div className="border-l border-gray-300 h-6 mx-2"></div>
      <span className="text-body2 w-8">{value.toString().padStart(3, '0')}</span>
      <div className="flex-1 bg-gray-200 h-2 rounded-full">
        <div
          className={`${getStatBarColor(type).split(' ')[0]} h-2 rounded-full`}
          style={{ width: `${(value / 255) * 50}%` }}
        />
      </div>
    </div>
  );
}