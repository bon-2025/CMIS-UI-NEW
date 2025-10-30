// src/components/forms/OtherInfoSection.jsx
import { Grid, TextField, Typography } from "@mui/material";

export default function OtherInfoSection({ register }) {
  return (
    <>
      <Typography
        variant="h6"
        sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
      >
        Other Information
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Burial Permit Number"
            fullWidth
            {...register("burialPermitNumber")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Contract Start"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("contractStart")}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Contract End"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("contractEnd")}
          />
        </Grid>
      </Grid>
    </>
  );
}
