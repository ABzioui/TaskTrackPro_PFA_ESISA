import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthenticatedRoute = () => {
  const token = useSelector((state) => state.global.token);

  if (!token) {
    return <Navigate to="/" replace />;
  }
};

export default AuthenticatedRoute;
