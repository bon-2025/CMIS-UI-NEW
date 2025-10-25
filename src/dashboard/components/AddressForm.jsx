import React from "react";
import { TextField, MenuItem } from "@mui/material";
import { usePhilippineAddress } from "../hook/usePhilippineAddress";

export const PhilippineAddressDropdownMUI = ({
  register,
  setValue,
  watch,
  errors,
  namePrefix = "",
}) => {
  const regionField = `${namePrefix}Region`;
  const provinceField = `${namePrefix}Province`;
  const municipalityField = `${namePrefix}Municipality`;
  const barangayField = `${namePrefix}Barangay`;

  const regionCode = watch(regionField) || "";
  const provinceCode = watch(provinceField) || "";
  const municipalityCode = watch(municipalityField) || "";

  const { regions, provinces, municipalities, barangays } = usePhilippineAddress(
    regionCode,
    provinceCode,
    municipalityCode
  );

  return (
    <>
      {/* REGION */}
      <TextField
        select
        fullWidth
        label="Region"
        {...register(regionField)}
        value={regionCode}
        onChange={(e) => {
          setValue(regionField, e.target.value);
          setValue(provinceField, "");
          setValue(municipalityField, "");
          setValue(barangayField, "");
        }}
        error={!!errors[regionField]}
        helperText={errors[regionField]?.message}
        margin="normal"
      >
        <MenuItem value="">Select Region</MenuItem>
        {regions.map((r) => (
          <MenuItem key={r.code} value={r.code}>
            {r.name}
          </MenuItem>
        ))}
      </TextField>

      {/* PROVINCE */}
      <TextField
        select
        fullWidth
        label="Province"
        {...register(provinceField)}
        value={provinceCode}
        onChange={(e) => {
          setValue(provinceField, e.target.value);
          setValue(municipalityField, "");
          setValue(barangayField, "");
        }}
        error={!!errors[provinceField]}
        helperText={errors[provinceField]?.message}
        margin="normal"
      >
        <MenuItem value="">Select Province</MenuItem>
        {provinces.map((p) => (
          <MenuItem key={p.code} value={p.code}>
            {p.name}
          </MenuItem>
        ))}
      </TextField>

      {/* MUNICIPALITY */}
      <TextField
        select
        fullWidth
        label="Municipality / City"
        {...register(municipalityField)}
        value={municipalityCode}
        onChange={(e) => {
          setValue(municipalityField, e.target.value);
          setValue(barangayField, "");
        }}
        error={!!errors[municipalityField]}
        helperText={errors[municipalityField]?.message}
        margin="normal"
      >
        <MenuItem value="">Select Municipality / City</MenuItem>
        {municipalities.map((m) => (
          <MenuItem key={m.code} value={m.code}>
            {m.name}
          </MenuItem>
        ))}
      </TextField>

      {/* BARANGAY */}
      <TextField
        select
        fullWidth
        label="Barangay"
        {...register(barangayField)}
        value={watch(barangayField) || ""}
        onChange={(e) => setValue(barangayField, e.target.value)}
        error={!!errors[barangayField]}
        helperText={errors[barangayField]?.message}
        margin="normal"
      >
        <MenuItem value="">Select Barangay</MenuItem>
        {barangays.map((b) => (
          <MenuItem key={b.code} value={b.code}>
            {b.name}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};
