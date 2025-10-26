import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./loginPage";

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-[url(/bg1.png)] bg-cover bg-center bg-no-repeat text-white">

      {/* 🔹 Overlay Background (fixed typo in bg--accent) */}
      <div className="absolute inset-0  backdrop-blur-sm"></div>

      {/* 🔹 Main Content */}
      <main className="relative flex-1 flex items-center justify-center px-6 py-8 z-10">
        <div className="w-full max-w-3xl text-center bg-white/10 backdrop-blur-2xl border border-accent/40 rounded-2xl shadow-black/30 shadow-2xl p-10 animate-fade-in">

          <Routes>
            {/* 🏠 Home Route */}
            <Route
              path="/"
              element={
                <section className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    Gate Pass Management System
                  </h1>

                  <p className="max-w-2xl mx-auto text-base md:text-lg text-accent leading-relaxed">
                    Manage and automate the process of granting access to
                      employee, visitor, and vehicle
                    
                    gate entries with a secure and efficient system.
                  </p>

                  <div className="pt-6">
                    <Link
                      to="/login"
                      className="px-8 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 to-green-400 text-white hover:from-green-500 hover:to-blue-400 shadow-lg hover:shadow-green-400/40 transition-all duration-300"
                    >
                      🚀 Get Started
                    </Link>
                  </div>
                </section>
              }
            />

            {/* 🔑 Login Route */}
            <Route path="/login" element={<LoginPage />} />

            {/* ❌ 404 Page */}
            <Route
              path="*"
              element={
                <section className="text-center space-y-3 mt-10">
                  <h1 className="text-6xl font-extrabold text-red-400 drop-shadow-lg">
                    404
                  </h1>
                  <p className="text-lg text-gray-300">
                    Oops! The page you’re looking for doesn’t exist.
                  </p>
                  <Link
                    to="/"
                    className="text-green-300 hover:underline font-medium"
                  >
                    Go Back Home
                  </Link>
                </section>
              }
            />
          </Routes>
        </div>
      </main>

      {/* 🔹 Footer */}
      <footer className="relative z-10 text-center py-4 text-sm text-accent border-t border-accent w-full">
        © {new Date().getFullYear()} FlexiPass | All Rights Reserved
      </footer>
    </div>
  );
}
