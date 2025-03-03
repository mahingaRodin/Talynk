import { Navigate, useLocation } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    // Redirect to login page with the return url
    return <Navigate to="/examples/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
