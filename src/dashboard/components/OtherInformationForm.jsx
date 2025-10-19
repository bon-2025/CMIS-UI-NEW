// components/OtherInformationForm.jsx
import InputForm from '../shared/InputForm';

const OtherInformationForm = ({ register, errors }) => {
  return (
    <>
      <InputForm
        label="Burial Permit Number"
        name="burialNumber"
        type="text"
        placeholder="Enter Burial Permit Number"
        register={register}
        errors={errors}
        controlId="permitNumber"
      />

      <div className="d-flex gap-4">
        <InputForm
          type="date"
          label="Contract Start"
          name="contractStart"
          register={register}
          errors={errors}
          controlId="contractStart"
        />
        <InputForm
          type="date"
          label="Contract End"
          name="contractEnd"
          register={register}
          errors={errors}
          controlId="contractEnd"
        />
      </div>
    </>
  );
};

export default OtherInformationForm;
