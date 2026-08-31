function SelectField({ name, value, options, onChange, placeholder }) {
  return (
    <select name={name} value={value} onChange={onChange}>
      {" "}
      <option value=""> {placeholder || "Select an option"} </option>{" "}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {" "}
          {option.label}{" "}
        </option>
      ))}{" "}
    </select>
  );
}

export default SelectField;
