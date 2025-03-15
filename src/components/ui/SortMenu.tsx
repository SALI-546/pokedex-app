'use client';

export default function SortMenu({ onSort, onClose }: { onSort: (option: string) => void; onClose: () => void }) {
  return (
    <div className="absolute right-0 mt-2 bg-[#DC0A2D] rounded-lg shadow-lg z-10">
      <div className="px-4 pt-3">
        <h3 className="text-white text-sm font-bold">Sort by:</h3>
      </div>
      <div className="bg-white rounded-b-lg px-4 pb-3">
        <label className="flex items-center mt-2">
          <input
            type="radio"
            value="number"
            name="sort"
            onChange={() => {
              onSort('number');
              onClose();
            }}
            defaultChecked
            className="text-[#DC0A2D] focus:ring-0 w-4 h-4"
          />
          <span className="ml-2 text-gray-800 text-sm">Number</span>
        </label>
        <label className="flex items-center mt-2">
          <input
            type="radio"
            value="name"
            name="sort"
            onChange={() => {
              onSort('name');
              onClose();
            }}
            className="text-[#DC0A2D] focus:ring-0 w-4 h-4"
          />
          <span className="ml-2 text-gray-800 text-sm">Name</span>
        </label>
      </div>
    </div>
  );
}