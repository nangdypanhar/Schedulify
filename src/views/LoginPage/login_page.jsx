import React from "react";
import SchoolImg from "../../assets/school.jpg";
import { useState } from "react";
import { IoEyeOffOutline , IoEyeOutline } from "react-icons/io5";

const LoginPage = () => {

  const [showPassword , setShowPassword] = useState(false)
  return (
    <div className="main-container flex flex-col md:flex-row justify-center items-center min-h-screen">
      <div className="flex-1 md:flex hidden justify-center items-center md:shrink-0">
        <img src={SchoolImg} className="p-10 " />
      </div>

      <div className="flex-1 flex items-center justify-center flex-col p-8">
        <h1 className="text-2xl font-bold mb-4">Login to Schedulify</h1>
        <hr className="w-1/2 border-gray-300 mb-4" />

        <div className="loginForm flex flex-col gap-5 w-4/5 max-w-lg">
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

          <div className="flex flex-col relative">
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
                  {showPassword ?<IoEyeOffOutline size={20} /> : <IoEyeOutline size={20}/>}
                </button>
              </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
