'use client';

import { useState } from 'react';
import SearchBar from './search/SearchBar';
import SortButton from './buttons/SortButton';
import Image from 'next/image';

export default function Header({ onSearch, onSort }: { onSearch: (query: string) => void; onSort: (option: string) => void }) {
  const [sortOption, setSortOption] = useState('number');

  return (
    <header className="bg-[#DC0A2D] p-4 flex flex-col md:flex-row items-start md:items-center justify-between w-full">
     
      <div className="flex items-center justify-start mb-2 md:mb-0">
        <Image src="/Pokeball.png" alt="Pokédex Logo" width={32} height={32} className="mr-2" />
        <h1 className="text-white text-headline font-bold">Pokédex</h1>
      </div>
     
      <div className="flex items-center justify-end space-x-2 w-full md:w-auto">
        <SearchBar onSearch={onSearch} sortOption={sortOption} />
        <SortButton onSort={(option) => { setSortOption(option); onSort(option); }} />
      </div>
    </header>
  );
}