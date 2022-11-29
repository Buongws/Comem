import React from "react";
import useAuth from "../custom-hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRouter;
