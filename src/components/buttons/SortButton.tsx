'use client';

import { useState } from 'react';
import SortMenu from '../ui/SortMenu';

export default function SortButton({ onSort }: { onSort: (option: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('number'); 

  const handleSort = (option: string) => {
    setSortOption(option);
    onSort(option);
  };

  const getButtonText = () => {
    return sortOption === 'number' ? '#' : 'A̲'; 
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md"
      >
        <span className="text-[#DC0A2D] text-base font-bold">{getButtonText()}</span>
      </button>
      {isOpen && <SortMenu onSort={handleSort} onClose={() => setIsOpen(false)} />}
    </div>
  );
}