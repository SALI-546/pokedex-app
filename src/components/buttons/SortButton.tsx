'use client';

import { useState } from 'react';
import SortMenu from '../ui/SortMenu';

export default function SortButton({ onSort }: { onSort: (option: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-primary rounded-full w-8 h-8 flex items-center justify-center"
      >
        ☰
      </button>
      {isOpen && <SortMenu onSort={onSort} onClose={() => setIsOpen(false)} />}
    </div>
  );
}