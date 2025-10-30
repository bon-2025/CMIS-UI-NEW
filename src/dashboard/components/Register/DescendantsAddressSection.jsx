// src/components/forms/UserAddressSection.jsx
import { Typography } from "@mui/material";
import { PhilippineAddressDropdown } from "./PhilippineAddressDropdown";

export default function DescendantsAddressSection({ register, setValue, watch, errors }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
      >
        Descendants Address
      </Typography>

      <PhilippineAddressDropdown
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
        namePrefix="descendantAddress"
      />
    </>
  );
}
