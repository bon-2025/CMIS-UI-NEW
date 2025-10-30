import React from "react";
import { TextField, MenuItem, Grid } from "@mui/material";
import { usePhilippineAddressDropdown } from "../../hook/Register/usePhilippineAddressDropdown";

export const PhilippineAddressDropdown = ({
  register,
  setValue,
  watch,
  errors,
  namePrefix = "",
}) => {
  const { fields, values, options, handlers } = usePhilippineAddressDropdown(
    watch,
    setValue,
    namePrefix
  );

  return (
    <Grid
      container
      spacing={2}
      justifyContent="flex-start"
      alignItems="center"
      sx={{ maxWidth: 1000, margin: "auto" }} // ✅ Centers & limits total width
    >
      {/* REGION */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Region"
          size="small" // ✅ makes input shorter vertically
          sx={{ minWidth: 200 }} // ✅ controls horizontal size
          {...register(fields.regionField)}
          value={values.regionCode || ""}
          onChange={(e) => handlers.handleRegionChange(e.target.value)}
          error={!!errors[fields.regionField]}
          helperText={errors[fields.regionField]?.message}
        >
          <MenuItem value="">Select Region</MenuItem>
          {options.regions.map((r) => (
            <MenuItem key={r.code} value={r.code}>
              {r.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* PROVINCE */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Province"
          size="small"
          sx={{ minWidth: 200 }}
          {...register(fields.provinceField)}
          value={values.provinceCode || ""}
          onChange={(e) => handlers.handleProvinceChange(e.target.value)}
          error={!!errors[fields.provinceField]}
          helperText={errors[fields.provinceField]?.message}
        >
          <MenuItem value="">Select Province</MenuItem>
          {options.provinces.map((p) => (
            <MenuItem key={p.code} value={p.code}>
              {p.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* MUNICIPALITY */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Municipality / City"
          size="small"
          sx={{ minWidth: 200 }}
          {...register(fields.municipalityField)}
          value={values.municipalityCode || ""}
          onChange={(e) => handlers.handleMunicipalityChange(e.target.value)}
          error={!!errors[fields.municipalityField]}
          helperText={errors[fields.municipalityField]?.message}
        >
          <MenuItem value="">Select Municipality / City</MenuItem>
          {options.municipalities.map((m) => (
            <MenuItem key={m.code} value={m.code}>
              {m.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      {/* BARANGAY */}
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          select
          label="Barangay"
          size="small"
          sx={{ minWidth: 200 }}
          {...register(fields.barangayField)}
          value={values.barangayCode || ""}
          onChange={(e) => handlers.handleBarangayChange(e.target.value)}
          error={!!errors[fields.barangayField]}
          helperText={errors[fields.barangayField]?.message}
        >
          <MenuItem value="">Select Barangay</MenuItem>
          {options.barangays.map((b) => (
            <MenuItem key={b.code} value={b.code}>
              {b.name}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
    </Grid>
  );
};
