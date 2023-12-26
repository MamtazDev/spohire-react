import React from "react";
import { Navigate } from "react-router-dom";
import { usePaymentInfoCheck } from "../hooks/usePaymentInfoCheck";

const PaymentRoute = ({ children }) => {
  const isPackageSelected = usePaymentInfoCheck();
  return isPackageSelected ? children : <Navigate to="/pricing" />;
};

export default PaymentRoute;
