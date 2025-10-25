// components/DescendantInfoForm.jsx
import InputForm from '../shared/InputForm';
import SelectForm from '../shared/SelectForm';

import { Controller  } from 'react-hook-form';

const DescendantsInfoForm = ({ register, control, errors }) => {

  return (
    <>
      <h4 className="mt-3">Information</h4>
       {/* Controlled input */}
      <InputForm
        label="First Name"
        name="firstName"
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
      {/* Controlled input */}
      <InputForm
        label="Last Name"
        name="lastName"
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
      
        {/* Controlled Select */}
        <Controller
          name="gender"
          control={control}
          rules={{ required: 'gender is required' }}
          render={({ field }) => (
            <SelectForm
              controlId="gender"
              label="gender"
              name={field.name}
              value={field.value || ''}
              onChange={field.onChange}
            >
              <option value="">Select gender</option>
              <option value="books">Male</option>
              <option value="movies">Femail</option>
            </SelectForm>
          )}
        />
    </>
  );
};

export default DescendantsInfoForm;
