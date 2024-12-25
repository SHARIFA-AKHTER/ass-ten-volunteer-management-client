// import { useContext } from "react";
// import AuthContext from "../context/AuthContext";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const { user } = useContext(AuthContext);
//   const location = useLocation();

//   return user ? (
//     children
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// export default PrivateRoute;

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const location = useLocation();

  if (!user || !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;