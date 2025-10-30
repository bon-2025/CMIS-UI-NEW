// src/hooks/useCustomForm.js
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../../schemas/adressSchema";
import { getDefaultValues } from "../../utils/Register/formUtils";

export const useRegisterForm = () => {
  const formMethods = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: getDefaultValues(),
  });

  return formMethods;
};
