export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  name,
}) {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      />
    </div>
  );
}
