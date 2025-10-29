import { useState } from "react";
import InputField from "../../shared/components/InputField.jsx";
import Logo from "./Logo.jsx";

const LoginForm = ({ register, handleSubmit, errors, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState({ show: false, success: false, message: "" });

  const handleLogin = async (data) => {
    setIsLoading(true);

    const result = await onSubmit(data); // parent handles navigation

    if (result?.success) {
      setModal({ show: true, success: true, message: "Login successful!" });
    } else {
      setModal({ show: true, success: false, message: "Invalid username or password." });
    }

    setIsLoading(false);
  };


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-opacity-25">
      <div className="bg-white p-5 rounded-4 shadow-sm" style={{ minWidth: "350px" }}>
          {/* Logo */}
          <Logo />

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mb-3">
            <InputField
              label="Username"
              name="username"
              placeholder="Enter your username"
              {...register("username")}
            />
            {errors.username && (
              <small className="text-danger">{errors.username.message}</small>
            )}
          </div>

          <div className="mb-3">
            <InputField
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password")}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className={`btn btn-primary ${isLoading ? "pulse-animation" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </div>

        </form>
      </div>

      {/* Modal */}
      {modal.show && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <h4 className={`mb-3 ${modal.success ? "text-success" : "text-danger"}`}>
                {modal.success ? "Success" : "Error"}
              </h4>
              <p>{modal.message}</p>
              <button
                className={`btn mt-3 ${modal.success ? "btn-success" : "btn-danger"}`}
                onClick={() => setModal({ show: false, success: false, message: "" })}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animation style */}
      <style>
        {`
          .pulse-animation {
            animation: pulse 1s infinite;
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default LoginForm;
