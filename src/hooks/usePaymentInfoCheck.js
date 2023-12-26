import { useSelector } from "react-redux";

export const usePaymentInfoCheck = () => {
  const { packageInfo } = useSelector((state) => state.payment);
  if (packageInfo?.name) {
    return true;
  } else {
    return false;
  }
};
