function PasswordField({
  name,
  value,
  placeholder,
  onChange,
  required = false,
}) {
  return (
    <input
      type="password"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
    />
  );
}
export default PasswordField;
