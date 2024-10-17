import React from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/Footer";
import Login from "./components/pages/register/Login";
import Register from "./components/pages/register/Register";
import Options from "./components/pages/dashboard/options/Options";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Chat from "./components/pages/dashboard/chat/Tip";
import Prediction from "./components/pages/dashboard/analytics/Prediction";
import Analytics from "./components/pages/dashboard/analytics/Analytics";
import PasswordReset from "./components/pages/dashboard/options/PasswordReset"; 
import ProfileSetting from "./components/pages/dashboard/options/ProfileSetting";
export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/options" element={<Options />}>
            <Route path="security" element={<PasswordReset />} />
            <Route path="profile" element={<ProfileSetting />} />
          </Route>
          <Route path="/dashboard/tips" element={<Chat />} />
          <Route path="/dashboard/predictions" element={<Prediction />} />
          <Route path="/dashboard/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
