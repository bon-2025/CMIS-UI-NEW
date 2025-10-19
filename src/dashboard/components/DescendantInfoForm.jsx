// components/DescendantInfoForm.jsx
import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';

const DescendantInfoForm = ({ descendants, setDescendants }) => {
  
  const handleChange = (field) => (e) => {
    setDescendants(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <>
      <h4 className="mt-3">Information</h4>
      <InputForm
        label="First Name"
        value={descendants.firstName}
        onChange={handleChange('firstName')}
        controlId="firstName"
      />
      <InputForm
        label="Last Name"
        value={descendants.lastName}
        onChange={handleChange('lastName')}
        controlId="lastName"
      />
      <SelectForm
        label="Gender"
        value={descendants.gender}
        onChange={handleChange('gender')}
        controlId="gender"
      >
        <option value="" disabled>Select gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </SelectForm>
    </>
  );
};

export default DescendantInfoForm;
