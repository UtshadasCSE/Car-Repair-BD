import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./../providers/AuthProvider";
import { PropTypes } from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const loction = useLocation();
  console.log(loction.pathname);
  if (loading) {
    return <span className="loading loading-infinity loading-md"></span>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={loction.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
