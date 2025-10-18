import { Form, Button, Col, Row, Container } from 'react-bootstrap';

const FormInput = ({label, name, placeholder, value, onChange, controlId}) => {
    return (
        <Form.Group as={Col} md={6} controlId={ controlId }>
            <Form.Label>{ label }</Form.Label>
            <Form.Control
                required
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </Form.Group>
    )
}
export default FormInput;