import { useState } from 'react';
import RegisterForm from "../components/RegisterForm";
import {Alert } from 'react-bootstrap';
import { useRegisterForm } from "../hook/useRegisterForm";
import { useRegisterValidation } from "../hook/useRegisterValidation";
import { SubmitRegistration } from "../service/SubmitRegistration";
import Address from '../components/Address';
import FormModals from '../components/FormModals';
import SubmitButton from "../components/SubmitButton";
import OtherInformationForm from "../components/OtherInformationForm";
import ContactPersonForm from "../components/ContactPersonForm";
import DescendantInfoForm from '../components/DescendantInfoForm';


const Register = () => {
  const { descendantsAddress, contactAddress, descendants, setDescendants,
          contactPerson, setContactPerson, otherInformation,
          setOtherInformation } = useRegisterForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [showValidationModal, setShowValidationModal] = useState(false);


  const isValid = useRegisterValidation({
    descendants,
    descendantsAddress,
    contactPerson,
    contactAddress,
    otherInformation
  });

  const handleSubmit = () => {
    if (!isValid) {
      setShowValidationModal(true);
      return;
    }

    const extractSelectedAddress = (addressState) => {
      return {
        regionCode: addressState.regionCode,
        provinceCode: addressState.provinceCode,
        municipalityCode: addressState.municipalityCode,
        barangayCode: addressState.barangayCode,
      };
    };

    const data = {
      information: {
        descendants,
        address: extractSelectedAddress(descendantsAddress)
      },
      contact: {
        contactPerson,
        address: extractSelectedAddress(contactAddress)
      },
      other: otherInformation
    };

    SubmitRegistration(data, setSubmitSuccess, setSubmitSuccess, setIsSubmitting);
  };

  return (
    <>
      <RegisterForm header={"Registration Form"} handleSubmit={handleSubmit}>
        {submitSuccess === true && <Alert variant="success">Registration successful!</Alert>}
        {submitSuccess === false && <Alert variant="danger">Submission failed. Try again.</Alert>}

        {/* 1. Descendant Info */}
        <DescendantInfoForm
        descendants={descendants}
        setDescendants={setDescendants}/>


        {/* 2. Descendant Address */}
        <h4 className="mt-3">Address</h4>
        <Address addressState={descendantsAddress} labelPrefix="descendants_" />

        {/* 3. Contact Person */}
        <ContactPersonForm
        contactPerson={contactPerson}
        setContactPerson={setContactPerson}
        />


        {/* 4. Contact Address */}
        <h4 className="mt-3">Contact Address</h4>
        <Address addressState={contactAddress} labelPrefix="contact_" />

        {/* 5. Other Info */}
        <h4 className="mt-3">Other Information</h4>
        <OtherInformationForm
        otherInformation={otherInformation}
        setOtherInformation={setOtherInformation}
        />

        <SubmitButton
            isSubmitting={isSubmitting}
            onClick={handleSubmit}
            disabled={isSubmitting} 
        />
      </RegisterForm>

        <FormModals isSubmitting={isSubmitting}
            showValidationModal={showValidationModal}
            setShowValidationModal={setShowValidationModal}
        />
    </>
  );
};

export default Register;
