import { Navigate, Route, Routes } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ProfileTech } from "../pages/ProfileTech";
import { Register } from "../pages/Register";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profiletch" element={<ProfileTech />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
