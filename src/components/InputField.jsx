const InputField = ({ label, type = 'text', name, value, onChange, placeholder }) => (
  <div>
    {label && <label className="form-label" htmlFor={name}>{label}</label>}
    <input
      className="form-control rounded-pill"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;