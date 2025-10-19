import { Form } from 'react-bootstrap';

const InputForm = ({ label, name, register, errors, required, type, placeholder, rules = {}, ...rest }) => {
    return (
        <Form.Group className="mb-3" controlId={name}>
            {label && <Form.Label>{label}</Form.Label>}

            <Form.Control
                type={type}
                placeholder={placeholder}
                {...register(name, { required, ...rules })}
                isInvalid={!!errors[name]}
                {...rest}
            />

            <Form.Control.Feedback type="invalid">
                {errors[name]?.message || (required && 'This field is required')}
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default InputForm;
