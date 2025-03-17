import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { login as loginService } from "../../service/auth/login";
import { useAuth } from "../../service/contexts/AuthContext";

const LoginPage = () => {
  const [rememberMe, setRemeberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { auth } = useAuth();
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { access_token } = await loginService(formData);
      auth.login(access_token, rememberMe);
      navigate("/");
    } catch (err) {
      console.error("Login failed", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F3F4F6] px-4 md:px-0">
      <div className="bg-white rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Login to Schedulify
        </h1>
        <p className="text-gray-500 mb-6 text-center">
          Login to stay connected
        </p>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-2">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-md border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOffOutline size={20} />
                ) : (
                  <IoEyeOutline size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rememberMe"
                className="w-4 h-4"
                checked={rememberMe}
                onChange={(e) => setRemeberMe(e.target.checked)}
              />
              <label htmlFor="rememberMe" className="cursor-pointer">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#284BAD] text-white w-48 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
