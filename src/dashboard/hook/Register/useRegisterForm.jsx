// src/hooks/useCustomForm.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterValidation } from "../../schemas/RegisterValidation";
import { getDefaultValues } from "../../utils/Register/formUtils";

export const useRegisterForm = () => {
  const formMethods = useForm({
    resolver: zodResolver(RegisterValidation),
    defaultValues: getDefaultValues(),
  });

  return formMethods;
};
