const Input = ({ label, id, className = "", ...props }) => {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-2.5
          text-gray-900
          outline-none
          transition
          placeholder:text-gray-400
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-white
          dark:placeholder:text-gray-500
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

export default Input;
