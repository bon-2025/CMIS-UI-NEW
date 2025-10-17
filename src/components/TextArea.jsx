const TextArea = ({ label, name, value, onChange, placeholder }) => (
  <div>
    {label && <label htmlFor={name}>{label}</label>}
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  </div>
);

export default TextArea;
