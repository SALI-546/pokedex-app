'use client';

import { useState } from 'react';
import ClearButton from '../buttons/ClearButton';

export default function SearchBar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    onSearch('');
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search"
        className="bg-white rounded-full px-4 py-2 text-body2 text-gray-medium w-48 focus:outline-none"
      />
      {query && (
        <div className="absolute right-2 top-2">
          <ClearButton onClick={handleClear} />
        </div>
      )}
    </div>
  );
}