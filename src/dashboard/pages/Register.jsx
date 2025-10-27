import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schemas/adressSchema";
import { PhilippineAddressDropdownMUI } from "../components/AddressForm";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  MenuItem,
  Paper,
} from "@mui/material";

export default function CustomFormMUI() {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      region: "",
      province: "",
      municipality: "",
      barangay: "",
      contactRegion: "",
      contactProvince: "",
      contactMunicipality: "",
      contactBarangay: "",
      userFirstName: "",
      userLastName: "",
      userGender: "",
      contactFirstName: "",
      contactLastName: "",
      contactGender: "",
      contactNumber: "",
      contactEmail: "",
      burialPermitNumber: "",
      contractStart: "",
      contractEnd: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        backgroundColor: "#f5f6fa",
        py: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: "100%",
          maxWidth: 900,
          p: 5,
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: "bold", color: "primary.main" }}
        >
          Descendants Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* USER INFO */}
          <Typography
            variant="h6"
            sx={{ mt: 3, mb: 2, fontWeight: "medium", color: "text.secondary" }}
          >
            User Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                fullWidth
                {...register("userFirstName")}
                error={!!errors.userFirstName}
                helperText={errors.userFirstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                fullWidth
                {...register("userLastName")}
                error={!!errors.userLastName}
                helperText={errors.userLastName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="userGender"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Gender"
                    fullWidth
                    error={!!errors.userGender}
                    helperText={errors.userGender?.message}
                  >
                    <MenuItem value="">Select Gender</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                )}
              />
            </Grid>
          </Grid>

          {/* USER ADDRESS */}
          <Typography
            variant="h6"
            sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
          >
            User Address
          </Typography>

          <PhilippineAddressDropdownMUI
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            namePrefix="userAddress"
          />

          {/* CONTACT PERSON */}
          <Typography
            variant="h6"
            sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
          >
            Contact Person Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact First Name"
                fullWidth
                {...register("contactFirstName")}
                error={!!errors.contactFirstName}
                helperText={errors.contactFirstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Last Name"
                fullWidth
                {...register("contactLastName")}
                error={!!errors.contactLastName}
                helperText={errors.contactLastName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="contactGender"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Contact Gender"
                    fullWidth
                    error={!!errors.contactGender}
                    helperText={errors.contactGender?.message}
                  >
                    <MenuItem value="">Select Gender</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </TextField>
                )}
              />
            </Grid>

            {/* ✅ New Fields */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Number"
                fullWidth
                {...register("contactNumber")}
                error={!!errors.contactNumber}
                helperText={errors.contactNumber?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contact Email"
                type="email"
                fullWidth
                {...register("contactEmail")}
                error={!!errors.contactEmail}
                helperText={errors.contactEmail?.message}
              />
            </Grid>
          </Grid>

          {/* CONTACT ADDRESS */}
          <Typography
            variant="h6"
            sx={{ mt: 4, mb: 2, fontWeight: "medium", color: "text.secondary" }}
          >
            Contact Address
          </Typography>

          <PhilippineAddressDropdownMUI
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            namePrefix="contactAddress"
          />

          {/* OTHER INFO */}
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

          {/* SUBMIT */}
          <Box mt={5} display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 5,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}
