import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // get token from localstorage
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  // if theres a token return the chile components which is the dashboard
  return children;
};

export default PrivateRoute;
