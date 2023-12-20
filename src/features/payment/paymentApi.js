import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updatePaymentStatus: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/api/v1/users/subscriptionStatus/${userId}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
        try {
          const result = await queryFulfilled;
          const userInfo = getState()?.auth;

          const newUserInfo = { ...userInfo, user: result?.data?.data };

          localStorage.setItem("spohireAuth", JSON.stringify(newUserInfo));

          dispatch(userLoggedIn(newUserInfo));
        } catch (err) {
          // do nothing, handle from ui
        }
      },
    }),
  }),
});

export const { useUpdatePaymentStatusMutation } = paymentApi;
