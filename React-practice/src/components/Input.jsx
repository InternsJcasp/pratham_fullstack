const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
