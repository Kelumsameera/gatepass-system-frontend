import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AdminPage from "./pages/adminPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import  { Toaster } from 'react-hot-toast';
export default function App() {
  return (
    <BrowserRouter>
      <Toaster className='mg-right'/>
      <div className="h-screen w-full flex items-center justify-center bg-[--color-primary] text-[--color-secondary] text-4xl font-bold">
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/login/*" element={<LoginPage />} />
        </Routes>

        {/* Optional test message outside the router */}
        <div className="absolute bottom-4 text-[--color-accent] text-lg">
          ✅ Tailwind v4.1 + React is working!
        </div>
      </div>
    </BrowserRouter>
  );
}
