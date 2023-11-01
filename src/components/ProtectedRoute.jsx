import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = (isLoggedIn) => {
  console.log(isLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to={'/LoginPage'} />;
};

export default ProtectedRoutes;