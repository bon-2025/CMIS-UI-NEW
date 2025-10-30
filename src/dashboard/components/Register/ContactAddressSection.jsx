// src/components/forms/ContactAddressSection.jsx
import { Typography } from "@mui/material";
import { PhilippineAddressDropdown } from "./PhilippineAddressDropdown";

export default function ContactAddressSection({ register, setValue, watch, errors }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
      >
        Contact Address
      </Typography>

      <PhilippineAddressDropdown
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
        namePrefix="contactAddress"
      />
    </>
  );
}
