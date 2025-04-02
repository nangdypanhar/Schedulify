import { Navigate } from "react-router-dom";
import { useAuth } from "../core/contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth } = useAuth();

  console.log(auth.isAuthenticated);

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
