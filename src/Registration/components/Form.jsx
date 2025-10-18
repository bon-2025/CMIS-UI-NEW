import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import '../Style/Form.css';
import FormInput from '../../components/FormInput'; 
import GenderForm from '../../components/GenderForm';

const Form = ({ header, handleSubmit, controlId, value, onChange }) => {
    return (
        <Container className="my-0 p-4 border rounded shadow-sm form-container">
            <h2 className="mb-4 text-center">{ header }</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <FormInput 
                        label="First Name" 
                        name={"firstName"} 
                        placeholder={"Enter first name"} 
                        value={value.firstname} 
                        onChange={onChange}
                        controlId={controlId}
                    />
                    <FormInput 
                        label="Last Name" 
                        name={"lastName"} 
                        placeholder={"Enter last name"} 
                        value={value.lastName} 
                        onChange={onChange}
                        controlId={controlId}/>
                    <GenderForm 
                        label="Gender" 
                        name="gender" 
                        value={value.gender} 
                        onChange={onChange} 
                        controlId={controlId}/>
                </Row>
            </Form>
        </Container>
    );
}

export default Form;

