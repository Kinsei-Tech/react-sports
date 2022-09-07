import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import LoginPage from "../Pages/LoginPage";
import ProfilePage from "../Pages/ProfilePage";
import RegisterPage from "../Pages/RegistrationPage";

export const RoutesMain = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </AnimatePresence>
  );
  };
