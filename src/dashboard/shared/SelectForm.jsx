import { Form } from "react-bootstrap";

function SelectForm({ controlId, label, name, value, onChange, children, error, disabled }) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        name={name}
        value={value}
        onChange={onChange}
        isInvalid={!!error}
        disabled={disabled}
      >
        {children}
      </Form.Select>
      <Form.Control.Feedback type="invalid">
        {error?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
}

export default SelectForm;
