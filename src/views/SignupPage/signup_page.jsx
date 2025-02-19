import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F3F4F6] px-4">
      {/* Register Container */}
      <div className="bg-white rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">Sign Up</h1>
        <p className="text-gray-500 mb-6 text-center">Create an Account</p>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {/* First and Last Name */}
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstname" className="font-medium mb-1">First Name:</label>
              <input
                type="text"
                id="firstname"
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Enter your first name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="font-medium mb-1">Last Name:</label>
              <input
                type="text"
                id="lastname"
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-1">Email:</label>
            <input
              type="email"
              id="email"
              className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              placeholder="Enter your email"
            />
          </div>

          {/* Password and Confirm Password */}
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="password" className="font-medium mb-1">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="rounded-md border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  placeholder="Password"
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

            <div className="flex flex-col w-full">
              <label htmlFor="confirmPassword" className="font-medium mb-1">Confirm Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  className="rounded-md border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  placeholder="Confirm password"
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
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" className="w-4 h-4" />
              <label htmlFor="terms" className="cursor-pointer">I agree with the terms of use</label>
            </div>
          </div>

          {/* Sign Up Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#284BAD] text-white w-48 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="flex justify-center text-sm">
            <p>Already have an account?</p>
            <a href="#" className="text-[#284BAD] ml-1 hover:underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
