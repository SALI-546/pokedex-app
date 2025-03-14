export default function SortMenu({ onSort, onClose }: { onSort: (option: string) => void; onClose: () => void }) {
  return (
    <div className="absolute right-0 mt-2 bg-[#DC0A2D] rounded-lg shadow-6dp p-4 z-10">
      <h3 className="text-white text-subtitle3 font-bold">Sort by:</h3>
      <label className="flex items-center mt-2">
        <input
          type="radio"
          value="number"
          name="sort"
          onChange={() => { onSort('number'); onClose(); }}
          defaultChecked
          className="text-primary focus:ring-0"
        />
        <span className="ml-2 text-white text-body2">Number</span>
      </label>
      <label className="flex items-center mt-2">
        <input
          type="radio"
          value="name"
          name="sort"
          onChange={() => { onSort('name'); onClose(); }}
          className="text-primary focus:ring-0"
        />
        <span className="ml-2 text-white text-body2">Name</span>
      </label>
    </div>
  );
}