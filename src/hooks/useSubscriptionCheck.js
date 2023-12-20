import { useSelector } from "react-redux";

export const useSubscriptionCheck = () => {
  const auth = useSelector((state) => state.auth);
  if (auth?.accessToken && !auth?.user?.isSubsCribed) {
    return { isSubscriptionCheck: false, path: "/pricing" };
  } else if (!auth?.accessToken && !auth?.user?.isSubsCribed) {
    return { isSubscriptionCheck: false, path: "/login" };
  } else {
    return { isSubscriptionCheck: true, path: null };
  }
};
