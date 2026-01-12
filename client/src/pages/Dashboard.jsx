const Dashboard = () => {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Dashboard (Protected)</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
