const AdminRoute = ({ children }) => {
  const isAdmin = true; // replace with auth logic

  return isAdmin ? children : <Navigate to="/home" />;
};

export default AdminRoute;