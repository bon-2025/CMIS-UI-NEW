import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HookForm } from "./hook/HookForm.jsx";
import { validateUser } from "./service/LoginAuth.jsx";
import LoginForm from "./Components/LoginForm.jsx";

const Login = () => {
  const navigate = useNavigate();
  const form = HookForm;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(form);

  const onSubmit = async (data) => {
    try {
      const response = await validateUser(data); // call your async validateUser
      return response; // returned to LoginForm to show modal
    } catch (err) {
      console.error("Login error:", err);
      return { success: false };
    }
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
