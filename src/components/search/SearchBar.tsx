'use client';

import { useState } from 'react';
import ClearButton from '../buttons/ClearButton';
import Image from 'next/image';

export default function SearchBar({ onSearch, sortOption }: { onSearch: (query: string) => void; sortOption: string }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    if (sortOption === 'number' && value.startsWith('#')) {
      const num = value.replace('#', '');
      onSearch(num); 
    } else {
      onSearch(value); 
    }
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  const getPlaceholder = () => {
    return sortOption === 'number' ? 'Search #004' : 'Search charmander';
  };

  return (
    <div className="relative w-full md:w-[280px] h-8">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <Image
          src="/Vector.svg"
          alt="Search Icon"
          width={16}
          height={16}
          className="text-gray-medium"
        />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={getPlaceholder()}
        className="bg-white rounded-full pl-10 pr-10 py-2 text-body2 text-gray-medium w-full h-full focus:outline-none"
      />
      {query && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <ClearButton onClick={handleClear} />
        </div>
      )}
    </div>
  );
}