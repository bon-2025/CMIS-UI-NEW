// src/components/forms/UserInfoSection.jsx
import { Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { genderOptions } from "../../utils/Register/formUtils";

export default function DescendantsInfoSection({ control, register, errors }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mt: 3, mb: 2, fontWeight: "medium", color: "text.secondary" }}
      >
        Descendants Information
      </Typography>

      <Grid container spacing={2}>
        {/* FIRST NAME */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="First Name"
            fullWidth
            size="small" // ✅ compact input
            {...register("descendantFirstName")}
            error={!!errors.descendantFirstName}
            helperText={errors.descendantFirstName?.message}
          />
        </Grid>

        {/* LAST NAME */}
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Last Name"
            fullWidth
            size="small" // ✅ compact input
            {...register("descendantLastName")}
            error={!!errors.descendantLastName}
            helperText={errors.descendantLastName?.message}
          />
        </Grid>

        {/* GENDER DROPDOWN (small and compact) */}
        <Grid item xs={12} sm={6} md={3}>
          <Controller
            name="descendantGender"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                label="Gender"
                size="small" // ✅ compact dropdown
                sx={{ minWidth: 180 }} // ✅ smaller width for dropdown
                fullWidth={false} // ✅ prevents stretching full width
                error={!!errors.descendantGender}
                helperText={errors.descendantGender?.message}
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
      </Grid>
    </>
  );
}
