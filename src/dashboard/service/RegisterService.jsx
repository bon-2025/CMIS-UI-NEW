import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCallback } from 'react';

export const navigate = () => useNavigate(); 

export const registerForm = {
    // Personal Info
  firstName: '',
  lastName: '',
  gender: '',

  // Address Info
  region: '',
  province: '',
  municipal: '',
  barangay: '',

  // Contact Info
  contactName: '',
  contactAddress: '',
  contactPhone: '',
  contactEmail: '',

  // Burial Info
  burialPermitNumber: '',
  contractStart: '',
  contractEnd: '',
}

export const FormSubmit = () => {
  const handleSubmit = useCallback(async ({
    formData,
    onSubmit,
    onSuccess,
    resetForm,
    messages = {
      success: 'Submitted successfully!',
      error: 'Submission failed!',
      missingHandler: 'Submit handler not defined',
    }
  }) => {
    if (!onSubmit) {
      toast.error(messages.missingHandler);
      return;
    }

    try {
      await onSubmit(formData);
      toast.success(messages.success);

      if (resetForm) resetForm();
      if (onSuccess) onSuccess();

    } catch (error) {
      console.error("Submit error:", error);
      toast.error(messages.error);
    }
  }, []);

  return handleSubmit;
};
