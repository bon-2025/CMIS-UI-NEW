import RegisterForm from "../components/RegisterForm";
import { useState } from 'react';
import { navigate, registerForm, FormSubmit } from '../service/RegisterService';

const Register = ({ onSubmit }) => {
    const [formData, setFormData] = useState(registerForm);
    
    const handleChange = ({ target: { name, value } }) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = FormSubmit();

    const redirect = () => navigate('/Dashboard/Records');
    const resetForm = () => setFormData(initialFormData);

    const handleFormSubmit = async () => {
        await handleSubmit({ formData, onSubmit, resetForm, onSuccess: redirect,
            messages: {
                success: 'Record submitted successfully!',
                error: 'Failed to submit record!',
                missingHandler: 'Submit handler not defined',
            },
        });
    };
    return (
        <RegisterForm 
            header={"Registration Form"} 
            handleSubmit={handleFormSubmit} 
            formData={formData}
            handleChange={handleChange}/>
    );
}

export default Register;
