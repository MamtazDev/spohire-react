import React from "react";
import { useSubscriptionCheck } from "../hooks/useSubscriptionCheck";
import { Navigate } from "react-router-dom";

const SubscribedRoute = ({ children }) => {
  const { isSubscriptionCheck, path } = useSubscriptionCheck();
  return isSubscriptionCheck ? children : <Navigate to={path} />;
};

export default SubscribedRoute;
