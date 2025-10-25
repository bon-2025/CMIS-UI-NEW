import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressSchema } from "../schemas/adressSchema";  // This can be TS or JS file, no impact here
import { PhilippineAddressDropdownMUI } from "../components/AddressForm";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  MenuItem
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
      burialPermitNumber: "",
      contractStart: "",
      contractEnd: "",
    },
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
    alert(data)
  };

  const onError = (errors) => {
    console.log("Validation errors:", errors);
  };

  return (
    <div className="container my-4">
      <div
        className="bg-white p-4 shadow rounded"
        style={{
          width: "900px",
          maxHeight: "90vh",
          overflowY: "auto",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" className="mb-3">
          Edit Address Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* USER INFO */}
          <Typography variant="h6" className="mt-4">
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
                defaultValue=""
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
                    sx={{ width: 100 }}
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
          <Typography variant="h6" className="mt-4">
            User Address
          </Typography>
          <PhilippineAddressDropdownMUI
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            namePrefix="userAddress"  // or "contact" for contact address
          />

          {/* CONTACT PERSON */}
          <Typography variant="h6" className="mt-4">
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
                defaultValue=""
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
                    sx={{ width: 100 }}
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

          {/* CONTACT ADDRESS */}
          <Typography variant="h6" className="mt-4">
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
          <Typography variant="h6" className="mt-4">
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
          <Box mt={4}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
