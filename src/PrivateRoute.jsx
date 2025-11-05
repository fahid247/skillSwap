import React, { use } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  {
    if (loading) {
      return (
        <div className="text-center flex justify-center items-center mt-10 text-gray-500">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      );
    }
    if (user) {
      return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default PrivateRoute;
