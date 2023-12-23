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
    createPayment: builder.mutation({
      query: (data) => ({
        url: "/api/v1/payments/create",
        method: "POST",
        body: data,
      }),
    }),
    getUserPayments: builder.query({
      query: (userId) => `/api/v1/payments/${userId}`,
    }),
  }),
});

export const {
  useUpdatePaymentStatusMutation,
  useCreatePaymentMutation,
  useGetUserPaymentsQuery,
} = paymentApi;
