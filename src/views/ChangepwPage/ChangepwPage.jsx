import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ChangepwPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F3F4F6] px-4 md:px-0">
      {/* change password Container */}
      <div className="bg-white rounded-2xl w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-center">Change Password</h1>
        <p className="text-gray-500 mb-6 text-center">Please set a new password</p>

        {/* Form */}
        <div className="flex flex-col gap-5">

          {/* Password Field */}
          <div className="flex flex-col">
            <label htmlFor="password" className="font-medium mb-2">
              New Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="newpassword"
                className="rounded-md border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="New Password"
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
                id="confirmpassword"
                className="rounded-md border border-gray-300 p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                placeholder="Confrim Password"
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


          {/* change password Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#284BAD] text-white w-48 py-3 rounded-md hover:bg-blue-600 transition"
            >
              Change Password
            </button>
          </div>

          {/* back to setting */}
          <div className="flex justify-baseline text-sm">
            <a href="#" className="text-[#284BAD] ml-1 hover:underline">Back to Setting</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangepwPage;
