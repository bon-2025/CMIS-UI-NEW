import { Form, Col } from 'react-bootstrap';

const InputForm = ({label, name, placeholder, value, onChange, controlId, type}) => {
    return (
        <Form.Group as={Col} md={6} controlId={ controlId }>
            <Form.Label>{ label }</Form.Label>
            <Form.Control
                required
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    );
}

export default InputForm;
