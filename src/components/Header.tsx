'use client';

import SearchBar from './search/SearchBar';
import SortButton from './buttons/SortButton';
import Image from 'next/image'; 

export default function Header({ onSearch, onSort }: { onSearch: (query: string) => void; onSort: (option: string) => void }) {
  return (
    <header className="bg-[#DC0A2D] p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        
        <Image src="/Pokeball.png" alt="Pokédex Logo" width={32} height={32} className="mr-2" />

        <h1 className="text-white text-headline font-bold">Pokédex</h1>
      </div>
      <div className="flex items-center space-x-2">
        <SearchBar onSearch={onSearch} />
        <SortButton onSort={onSort} />
      </div>
    </header>
  );
}
