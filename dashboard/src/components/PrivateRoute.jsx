import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const [cookies] = useCookies(["token"]);
  const isAuthenticated = !!cookies.token;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

