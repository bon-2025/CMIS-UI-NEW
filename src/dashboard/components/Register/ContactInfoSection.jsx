// src/components/forms/ContactInfoSection.jsx
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { genderOptions } from "../../utils/Register/formUtils";

export default function ContactInfoSection({ control, register, errors }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
      >
        Contact Person Information
      </Typography>

      <Grid container spacing={2}>
        {/* FIRST NAME */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Contact First Name"
            fullWidth
            size="small"
            {...register("contactFirstName")}
            error={!!errors.contactFirstName}
            helperText={errors.contactFirstName?.message}
          />
        </Grid>

        {/* LAST NAME */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="Contact Last Name"
            fullWidth
            size="small"
            {...register("contactLastName")}
            error={!!errors.contactLastName}
            helperText={errors.contactLastName?.message}
          />
        </Grid>

        {/* GENDER DROPDOWN (small size) */}
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="contactGender"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Contact Gender"
                size="small" // ✅ smaller dropdown
                sx={{ minWidth: 180 }} // ✅ narrower width
                fullWidth={false} // ✅ don't stretch across the grid cell
                error={!!errors.contactGender}
                helperText={errors.contactGender?.message}
              >
                <MenuItem value="">Select Gender</MenuItem>
                {genderOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
        </Grid>

        {/* CONTACT NUMBER */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Contact Number"
            fullWidth
            size="small"
            {...register("contactNumber")}
            error={!!errors.contactNumber}
            helperText={errors.contactNumber?.message}
          />
        </Grid>

        {/* EMAIL */}
        <Grid item xs={12}>
          <TextField
            label="Contact Email"
            type="email"
            fullWidth
            size="small"
            {...register("contactEmail")}
            error={!!errors.contactEmail}
            helperText={errors.contactEmail?.message}
          />
        </Grid>
      </Grid>
    </>
  );
}
