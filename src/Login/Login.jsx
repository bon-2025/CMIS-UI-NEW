import { useForm } from "react-hook-form";
import { useFormConfig } from "./hook/useFormConfig.jsx";
import { ValidateAuth } from "./service/ValidateAuth.jsx";
import LoginForm from "./Components/LoginForm.jsx";
import { useAuthContext } from "../shared/components/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { login, isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm(useFormConfig);

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  //login submit
  const onSubmit = async (data) => {
    const result = await ValidateAuth(data);

    if (result.success) {
      login(result.user);
      navigate("/dashboard");
    }

    return result;
  };

  return (
    <LoginForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
};

export default Login;
