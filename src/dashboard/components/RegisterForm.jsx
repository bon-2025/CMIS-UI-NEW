import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';

const RegisterForm = ({ header, handleSubmit, formData, handleChange }) => {


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
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <InputForm 
                        label="First Name" 
                        name={"firstName"} 
                        placeholder={"Enter first name"} 
                        value={formData.firstName} 
                        onChange={handleChange}
                        controlId={"firstName"}
                    />
                    <InputForm 
                        label="Last Name" 
                        name={"lastName"} 
                        placeholder={"Enter last name"} 
                        value={formData.lastname} 
                        onChange={handleChange}
                        controlId={"lastName"}
                    />
                    <SelectForm
                        controlId="gender"
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}>

                        <option value="" disabled>Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </SelectForm>
                    <SelectForm
                        controlId="region"
                        label="Region"
                        name="region"
                        value={formData.region}
                        onChange={handleChange}>

                        <option value="" disabled>Select region</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </SelectForm>

                </Row>
            </Form>
        </Container>
    );
}

export default RegisterForm;
