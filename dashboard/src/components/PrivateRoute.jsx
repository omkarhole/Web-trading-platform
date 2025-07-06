// import { useCookies } from "react-cookie";
// import { Navigate } from "react-router-dom";

// export default function PrivateRoute({ children }) {
//   const [cookies] = useCookies(["token"]);
//   const isAuthenticated = !!cookies.token;

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// }
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null = loading

  useEffect(() => {
    axios.post(
      "https://web-trading-platform-backend.onrender.com",
      {},
      { withCredentials: true }
    )
    .then((res) => {
      setIsAuthenticated(res.data.status);
    })
    .catch(() => {
      setIsAuthenticated(false);
    });
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a spinner
  }

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
