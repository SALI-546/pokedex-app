export default function ClearButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-gray-medium hover:text-gray-dark focus:outline-none"
    >
      X
    </button>
  );
}