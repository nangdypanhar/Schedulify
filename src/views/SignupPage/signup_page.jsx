import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F3F4F6] px-4 md:px-0">
      {/* Login Container */}
      <div className="bg-white rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">Login to Schedulify</h1>
        <p className="text-gray-500 mb-6 text-center">Login to stay connected</p>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* Username Field */}
          <div className="flex flex-col">
            <label htmlFor="username" className="font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium mb-2">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="rounded-md border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" className="w-4 h-4" />
              <label htmlFor="rememberMe" className="cursor-pointer">Remember me</label>
            </div>
            <p className="text-blue-500 hover:underline cursor-pointer">Forgot Password?</p>
          </div>

          {/* Sign-In Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#284BAD] text-white w-48 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Sign In
            </button>
          </div>

          {/* Register Link */}
          <div className="flex justify-center text-sm">
            <p>Don't have an account?</p>
            <a href="#" className="text-[#284BAD] ml-1 hover:underline">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
