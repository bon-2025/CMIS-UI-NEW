const SelectDropdown = ({ label, name, value, onChange, options }) => (
  <div>
    {label && <label htmlFor={name}>{label}</label>}
    <select id={name} name={name} value={value} onChange={onChange}>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectDropdown;
