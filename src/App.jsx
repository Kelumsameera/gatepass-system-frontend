import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage.jsx";
import AdminPage from "./pages/adminPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import  { Toaster } from 'react-hot-toast';
import RegisterPage from "./pages/registerPage.jsx";
import Test from "./components/test.jsx";
import ExecativePage from "./pages/execativePage.jsx";
import DimoPage from "./pages/dimo.jsx";
import EmployePage from "./pages/employePage.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Toaster className='mg-right'/>
      <div className="h-screen w-full flex items-center justify-center bg-[--color-primary] text-[--color-secondary] text-4xl font-bold">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/executive/*" element={<ExecativePage/>} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/register/*" element={<RegisterPage />} /> 
          <Route path="/test" element={<Test />} />
          <Route path="dimo" element={<DimoPage />} />
          <Route path="/employee" element={<EmployePage />} />

        </Routes>

       
      </div>
    </BrowserRouter>
  );
}
