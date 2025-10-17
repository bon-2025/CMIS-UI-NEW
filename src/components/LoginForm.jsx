import { useState } from 'react';
import InputField from './InputField.jsx';
import Checkbox from './CheckBox.jsx';
import AnchorTag from './AnchorTag.jsx';
import PrimaryButton from './PrimaryButton.jsx';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        remember: false,
    });
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add authentication logic here
    navigate('/Dashboard')
  };

  return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-primary bg-opacity-25">
            <div className="bg-white p-5 rounded-4 shadow-sm" style={{ minWidth: '350px' }}>
                <div className="text-center mb-4">
                    {/* Replace with your actual logo path */}
                    <img src="/path/to/logo.png" alt="San Luis Aurora Logo" width="80" />
                    <h5 className="mt-3 fw-bold text-uppercase">
                            Municipality of San Luis, Aurora
                    </h5>
                    <p className="mb-0 fw-semibold">Cemetery Management Information System</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <InputField
                            label="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                    </div>

                    <div className="mb-3">
                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="d-grid">
                        <PrimaryButton text="Log in"/>
                    </div>
                    <div className="d-grid text-center">
                        <Checkbox
                            label="Remember Me"
                            name="remember"
                            checked={formData.remember}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="text-center mt-3">
                        <AnchorTag text = "Forgot password?"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
