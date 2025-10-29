import { Form, Button, Col, Row, Container } from 'react-bootstrap';

const RegisterForm = ({ header, onSubmit, children}) => {
    

    return (
        <Container className="my-0 p-4 border rounded shadow-sm container bg-light-subtle"
        style={{
            width: '100%',
            height: '640px',
            backgroundColor: 'white',
            overflowY: 'auto',
        }}
        >
            <h2 className="mb-4 text-center">{ header }</h2>
            <Form onSubmit={onSubmit}>
                <Row className="mb-3">
                    {children}
                </Row>
            </Form>
        </Container>
    );
}

export default RegisterForm;
