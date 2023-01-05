import { Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/home" />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" />
      <Route path="/profiletch" />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
