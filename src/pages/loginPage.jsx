import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function login() {
    console.log(email, password);
    
  }



  return (
    <div className="w-full h-screen bg-[url('/bg1.png')] bg-center bg-no-repeat bg-cover flex justify-center items-center px-4">
      <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-2xl backdrop-blur-xs shadow-2xl p-8 flex flex-col justify-center items-center bg-white/20 border border-white/30">
       
        <img
          src="/logo.png"
          alt="logo"
          className="w-[70px] h-[70px] mb-4"
        />

        {/* Title */}
        <h1 className="text-3xl font-bold text-blue mb-6 text-center tracking-wide">
          Login
        </h1>

        {/* Form */}
        <div className="w-full flex flex-col gap-4">
          {/* Email */}
          <input
            onChange={
              (e) => {

                setEmail(e.target.value);

            }}
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 text-[18px] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
          />

          {/* Password */}
          <input
            onChange={
              (e)=> {

                setPassword(e.target.value);

            }}
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-transparent border border-accent/70 text-black shadow-xl placeholder:text-gray-600 p-3 text-[18px] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
          />

          {/* Options */}
          <div className="flex items-center justify-between text-sm text-accent/80">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="hover:underline hover:text-blue-600 transition-colors duration-150"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
          onClick={login}
            type="submit"
            className="w-full h-[50px] shadow-2xl p-3 rounded-lg bg-secondary border border-accent text-accent text-[22px] font-bold hover:bg-transparent hover:border-accent transition-all duration-300 mt-2"
          >
            Login
          </button>

          {/* Sign Up */}
          <p className="text-sm text-accent/80 flex  justify-center gap-1">
            Don&apos;t have an account?  
            <Link
              to="/signup"
              className="italic hover:underline hover:text-blue-600 transition-colors duration-150"
            >
               Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
