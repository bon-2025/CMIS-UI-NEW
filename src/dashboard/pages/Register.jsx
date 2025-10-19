import { useState } from 'react';
import RegisterForm from "../components/RegisterForm";
import { Alert } from 'react-bootstrap';
import { validateRegistration  } from "../hook/useRegisterValidation"; // renamed from useRegisterValidation
import { SubmitRegistration } from "../service/SubmitRegistration";
import Address from '../components/Address';
import FormModals from '../components/FormModals';
import SubmitButton from "../components/SubmitButton";
import OtherInformationForm from "../components/OtherInformationForm";
import ContactPersonForm from "../components/ContactPersonForm";
import DescendantsForm from '../components/DescendantsForm';

import { useForm } from 'react-hook-form';

const Register = () => {
  const { register, control, setValue, handleSubmit, formState: { errors } } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [showValidationModal, setShowValidationModal] = useState(false);

  const onSubmit = (data) => {
    if (!validateRegistration(data)) {
      setShowValidationModal(true);
      return;
    }

    setIsSubmitting(true);

    SubmitRegistration(
      data,
      () => {
        setSubmitSuccess(true);
        setIsSubmitting(false);
      },
      () => {
        setSubmitSuccess(false);
        setIsSubmitting(false);
      },
      setIsSubmitting
    );
  };

  return (
    <>
      <RegisterForm header={"Registration Form"} onSubmit={handleSubmit(onSubmit)}>
        {submitSuccess === true && <Alert variant="success">Registration successful!</Alert>}
        {submitSuccess === false && <Alert variant="danger">Submission failed. Try again.</Alert>}

        {/* 1. Descendant Info */}
        <DescendantsForm
          register={register}
          control={control}
          errors={errors}
        />

        {/* 2. Descendant Address */}
        <h4 className="mt-3">Address</h4>
        <Address control={control} setValue={setValue} labelPrefix="descendants_" />
        
        {/* 3. Contact Person */}
        <ContactPersonForm
          register={register}
          control={control}
          errors={errors}
        />

        {/* 4. Contact Address */}
        <h4 className="mt-3">Contact Address</h4>
        <Address control={control} setValue={setValue} labelPrefix="contact_" />

        {/* 5. Other Info */}
        <h4 className="mt-3">Other Information</h4>
        <OtherInformationForm
          register={register}
          control={control}
          errors={errors}
        />

        <SubmitButton
          isSubmitting={isSubmitting}
          onClick={handleSubmit(onSubmit)}
          disabled={isSubmitting}
        />
      </RegisterForm>

      <FormModals
        isSubmitting={isSubmitting}
        showValidationModal={showValidationModal}
        setShowValidationModal={setShowValidationModal}
      />
    </>
  );
};

export default Register;
