import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";
import { useAuth } from "../context/IsAuth";

interface PrivateRouteProps {
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/admin" />;
  }
};

export default PrivateRoute;
