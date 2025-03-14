import Link from 'next/link';

export default function ChevronButton({ direction, currentId }: { direction: 'left' | 'right'; currentId: number }) {
  const newId = direction === 'left' ? currentId - 1 : currentId + 1;
  if (newId < 1 || newId > 1008) return <div className="w-6"></div>;

  return (
    <Link href={`/pokemon/${newId}`}>
      <span className="text-2xl text-white">
        {direction === 'left' ? '←' : '→'}
      </span>
    </Link>
  );
}