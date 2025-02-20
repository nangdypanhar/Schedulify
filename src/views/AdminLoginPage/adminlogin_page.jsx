import React, { useState } from "react";
import idtlogo from "../../assets/idtlogo.png";

const AdminLoginPage = () => {
    // State for user input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
        // Here you can send the data to an API or authentication service
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={idtlogo} alt="CADT IDT Logo" className="w-60" />
                </div>

                {/* Login Heading */}
                <h3 className="text-lg font-semibold text-center mb-4">
                    Login as admin
                </h3>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Capture input
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Capture input
                        />
                    </div>

                    <div className="text-right mb-4">
                        <a href="#" className="text-blue-600 text-sm hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginPage;
