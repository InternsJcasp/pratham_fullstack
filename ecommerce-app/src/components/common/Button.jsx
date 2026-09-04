export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-3 bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
    >
      {children}
    </button>
  );
}
