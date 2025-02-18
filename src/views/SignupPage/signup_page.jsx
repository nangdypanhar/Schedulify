import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F3F4F6] px-4 md:px-0">
      {/* Register Container */}
      <div className="bg-white rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">Sign Up</h1>
        <p className="text-gray-500 mb-6 text-center">Create an Account</p>

        {/* Form */}
        <div className="flex flex-col gap-5">
          {/* first and last name Field */}
          <div className="flex justify-between">
            <div className="flex flex-col">
                <label htmlFor="firstname" className="font-medium mb-2">
                First Name:
                </label>
                <input
                type="text"
                id="firstname"
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="lastname" className="font-medium mb-2">
                Last Name:
                </label>
                <div className="relative">

                    <input
                    type="text"
                    id="lastname"
                    className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    />
                </div>
            </div>
          </div>
            
          {/* email  */}
          <div className="flex flex-col">
                <label htmlFor="email" className="font-medium mb-2">
                Email:
                </label>
                <input
                type="text"
                id="email"
                className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                />
           </div>

          {/* Password Field */}
          <div className="flex justify-between">
            <div className="flex flex-col">
                <label htmlFor="password" className="font-medium mb-2">
                Password:
                </label>
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

            <div className="flex flex-col">
                <label htmlFor="password" className="font-medium mb-2">
                Confirm Password:
                </label>
                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
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

          {/* agree of term */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="rememberMe" className="w-4 h-4" />
              <label htmlFor="rememberMe" className="cursor-pointer">Agree of Terms and Use</label>
            </div>
          </div>

          {/* Sign-In Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#284BAD] text-white w-48 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Sign Up
            </button>
          </div>

          {/* Register Link */}
          <div className="flex justify-center text-sm">
            <p>Already have an Account?</p>
            <a href="#" className="text-[#284BAD] ml-1 hover:underline">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
