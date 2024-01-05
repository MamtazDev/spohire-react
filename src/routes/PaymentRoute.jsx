import React from "react";
import { Navigate } from "react-router-dom";
import { usePaymentInfoCheck } from "../hooks/usePaymentInfoCheck";

const PaymentRoute = ({ children }) => {
  const isPackageSelected = usePaymentInfoCheck();
  return isPackageSelected?.status ? (
    children
  ) : (
    <Navigate to={isPackageSelected?.path} />
  );
};

export default PaymentRoute;
