import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleRegister() {
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all required fields!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/users", {
        firstName,
        lastName,
        employeeId,
        phoneNumber,
        address,
        role,
        email,
        password,
      });

      toast.success(res.data.message || "User registered successfully!");
      console.log("User created:", res.data);

      // Redirect to login page after success
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(error.response?.data?.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full min-h-screen bg-[url('/bg5.png')] bg-no-repeat bg-cover flex justify-center items-center overflow-y-auto py-8">
      <div className="w-full sm:w-[500px] md:w-[600px] backdrop-blur-xs shadow-2xl rounded-2xl bg-white/20 border border-accent/20 p-8">
        {/* Logo + Title */}
        <div className="flex flex-col items-center mb-6">
          <img src="/logo.png" alt="logo" className="w-[70px] h-[70px] mb-2" />
          <h1 className="text-3xl font-bold font-serif text-blue text-center">
            Register
          </h1>
        </div>

        <div className="flex flex-col gap-4 justify-between gap-y-3 text-[14px]">
          {/* Name Fields */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
          </div>

          {/* Employee ID + Phone */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Employee ID (e.g., EMP123)"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
          </div>

          {/* Address + Role */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
            <input
              type="text"
              placeholder="Role (admin / employee)"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
          </div>

          {/* Email + Password */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
            <input
              type="password"
              placeholder="Password (min 6 characters)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
            />
          </div>

          {/* Register Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className={`w-full h-[50px] mt-2 shadow-2xl p-3 rounded-lg text-[20px] font-bold transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-transparent hover:text-blue-700 border border-blue-700 text-white"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Login Redirect */}
          <p className="text-center text-gray-700 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
