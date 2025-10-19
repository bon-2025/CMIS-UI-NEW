// components/ContactPersonForm.jsx
import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';
import { Controller } from 'react-hook-form';

const ContactPersonForm = ({ register, control, errors }) => {
  return (
    <>
      <h4 className="mt-3">Contact Information</h4>

      {/* First Name */}
      <InputForm
        label="First Name"
        name="contactFirstName"
        type="text"
        placeholder="Enter First Name"
        register={register}
        errors={errors}
        required={true}
        rules={{
          pattern: {
            value: /^[^\d]+$/,
            message: "No numbers allowed, must contain at least one character",
          },
        }}
      />

      {/* Last Name */}
      <InputForm
        label="Last Name"
        name="contactLastName"
        type="text"
        placeholder="Enter Last Name"
        register={register}
        errors={errors}
        required={true}
        rules={{
          pattern: {
            value: /^[^\d]+$/,
            message: "No numbers allowed, must contain at least one character",
          },
        }}
      />

      {/* Gender */}
      <Controller
        name="contactGender"
        control={control}
        rules={{ required: 'Gender is required' }}
        render={({ field, fieldState }) => (
          <SelectForm
            controlId="contactGender"
            label="Gender"
            name={field.name}
            value={field.value || ''}
            onChange={field.onChange}
            error={fieldState.error}
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </SelectForm>
        )}
      />
    </>
  );
};

export default ContactPersonForm;
