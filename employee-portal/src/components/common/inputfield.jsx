function InputField({ type, value, name, onChange, placeholder }) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputField;
