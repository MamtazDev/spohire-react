import { useSelector } from "react-redux";

export const usePaymentInfoCheck = () => {
  const { packageInfo } = useSelector((state) => state.payment);
  const { user } = useSelector((state) => state.auth);
  if (packageInfo?.name && user) {
    return { status: true };
  }
  if (!user) {
    return { status: false, path: "/login" };
  } else {
    return { status: false, path: "/pricing" };
  }
};
