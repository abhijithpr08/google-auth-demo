const API_URL = "http://localhost:5050";

export const getProfile = async () => {
  const res = await fetch("http://localhost:5050/api/profile", {
    credentials: "include", 
  });

  return res.json();
};

