import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5050/api/profile", {
      credentials: "include",
    })
      .then((res) => setAuthorized(res.ok))
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) return null;
  if (!authorized) return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
