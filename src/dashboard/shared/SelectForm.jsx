import { Form } from 'react-bootstrap';

function SelectForm({ controlId, label, name, value, onChange, children }) {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        required
        name={name}
        value={value}
        onChange={onChange}>
        {children}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectForm;
