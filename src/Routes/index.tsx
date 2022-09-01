import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegistrationPage";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
