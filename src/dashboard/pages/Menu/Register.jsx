import { Suspense, lazy } from "react";
import { Box, Button, Paper, Typography, CircularProgress } from "@mui/material";
import { useRegisterForm } from "../../hook/Register/useRegisterForm";
import { submitFormData } from "../../service/Register/formService";

// 💡 Lazy-load all your form sections to reduce initial bundle size
const DescendantsInfoSection = lazy(() => import("../../components/Register/DescendantsInfoSection"));
const DescendantsAddressSection = lazy(() => import("../../components/Register/DescendantsAddressSection"));
const ContactInfoSection = lazy(() => import("../../components/Register/ContactInfoSection"));
const ContactAddressSection = lazy(() => import("../../components/Register/ContactAddressSection"));
const OtherInfoSection = lazy(() => import("../../components/Register/OtherInfoSection"));

// 🌀 Loader component displayed while lazy-loaded sections are loading
const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
    <CircularProgress size={28} />
  </Box>
);

export default function Register() {
  // 🎛️ Initialize the form using a custom hook
  // - control: react-hook-form controller for controlled components
  // - register: register inputs
  // - handleSubmit: handle form submission
  // - setValue, watch: helpers to set and observe form values
  // - errors: form validation errors
  const { control, register, handleSubmit, setValue, watch, formState: { errors }, } = useRegisterForm();

  // 📨 Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await submitFormData(data); // send data to API
      alert(response.message); // show success message
    } catch (err) {
      alert("Failed to submit form."); // show error if API fails
    }
  };

  return (
    // 🌐 Page container
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
      {/* 📝 Paper container for the form */}
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
        {/* 🏷️ Form title */}
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: "bold", color: "primary.main" }}
        >
          Descendants Form
        </Typography>

        {/* ⏳ Wrap lazy-loaded sections in Suspense to show fallback while loading */}
        <Suspense fallback={<Loader />}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* 👤 User Info Section */}
            <DescendantsInfoSection control={control} register={register} errors={errors} />

            {/* 🏠 User Address Section */}
            <DescendantsAddressSection
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />

            {/* 📞 Contact Info Section */}
            <ContactInfoSection control={control} register={register} errors={errors} />

            {/* 🏡 Contact Address Section */}
            <ContactAddressSection
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />

            {/* 🔧 Other Info Section */}
            <OtherInfoSection register={register} />

            {/* 🖱️ Submit button */}
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
        </Suspense>
      </Paper>
    </Box>
  );
}
