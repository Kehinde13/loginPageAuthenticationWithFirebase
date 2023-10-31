import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = (isLoggedIn) => {
  return !isLoggedIn ? <Outlet /> : <Navigate to={'./HomePage'} />;
};

export default ProtectedRoutes;