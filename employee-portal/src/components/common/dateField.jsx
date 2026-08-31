function DateField({ name, value, onChange, placeholder, min, max }) {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
    />
  );
}

export default DateField;
