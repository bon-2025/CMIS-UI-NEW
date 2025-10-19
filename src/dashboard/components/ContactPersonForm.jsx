// components/ContactPersonForm.jsx
import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';

const ContactPersonForm = ({ contactPerson, setContactPerson }) => {
  const handleChange = (field) => (e) => {
    setContactPerson(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <>
      <h4 className="mt-3">Contact Information</h4>
      <InputForm
        label="First Name"
        value={contactPerson.firstName}
        onChange={handleChange('firstName')}
        controlId="contactFirstName"
      />
      <InputForm
        label="Last Name"
        value={contactPerson.lastName}
        onChange={handleChange('lastName')}
        controlId="contactLastName"
      />
      <SelectForm
        label="Gender"
        value={contactPerson.gender}
        onChange={handleChange('gender')}
        controlId="contactGender"
      >
        <option value="" disabled>Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </SelectForm>
    </>
  );
};

export default ContactPersonForm;
