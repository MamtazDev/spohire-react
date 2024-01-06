import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { usePaymentInfoCheck } from "../hooks/usePaymentInfoCheck";

const PaymentRoute = ({ children }) => {
  const isPackageSelected = usePaymentInfoCheck();
  const location = useLocation();
  return isPackageSelected?.status ? (
    children
  ) : (
    <Navigate to={isPackageSelected?.path} state={{ from: location }} replace />
  );
};

export default PaymentRoute;
