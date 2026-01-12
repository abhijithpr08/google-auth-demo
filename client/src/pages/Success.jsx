import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5050/api/me", {
      credentials: "include",
    })
      .then(res => {
        if (res.ok) navigate("/dashboard");
        else navigate("/");
      });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600 text-sm">Signing you in...</p>
      </div>
    </div>
  );
};

export default Success;
