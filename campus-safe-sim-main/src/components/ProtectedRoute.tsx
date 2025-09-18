import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  authKey: string;
  redirectTo: string;
}

export const ProtectedRoute = ({ children, authKey, redirectTo }: ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem(authKey) === "true";
    if (!isAuthenticated) {
      navigate(redirectTo);
    }
  }, [authKey, redirectTo, navigate]);

  const isAuthenticated = localStorage.getItem(authKey) === "true";
  
  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};