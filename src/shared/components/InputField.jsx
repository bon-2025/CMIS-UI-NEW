import React from "react";

const InputField = React.forwardRef(({ label, type = "text", name, placeholder, ...rest }, ref) => (
  <div>
    {label && <label className="form-label" htmlFor={name}>{label}</label>}
    <input
      ref={ref} // ✅ allows react-hook-form to control the input
      className="form-control rounded-pill"
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      {...rest} // ✅ spreads onChange, value, etc.
    />
  </div>
));

export default InputField;
