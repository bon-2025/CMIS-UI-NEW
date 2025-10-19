// components/OtherInformationForm.jsx
import InputForm from '../shared/InputForm';

const OtherInformationForm = ({ otherInformation, setOtherInformation }) => {
  const handleChange = (field) => (e) => {
    setOtherInformation(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <>
      <InputForm
        label="Burial Permit Number"
        value={otherInformation.burialNumber}
        onChange={handleChange('burialNumber')}
        controlId="permitNumber"
      />
      <div className="d-flex gap-4">
        <InputForm
          type="date"
          label="Contract Start"
          value={otherInformation.contractStart}
          onChange={handleChange('contractStart')}
          controlId="contractStart"
        />
        <InputForm
          type="date"
          label="Contract End"
          value={otherInformation.contractEnd}
          onChange={handleChange('contractEnd')}
          controlId="contractEnd"
        />
      </div>
    </>
  );
};

export default OtherInformationForm;
