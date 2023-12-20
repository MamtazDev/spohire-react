import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const settingsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/api/v1/users/change-password`,
        method: "POST",
        body: data,
      }),
      //   async onQueryStarted(arg, { queryFulfilled, dispatch, getState }) {
      //     try {
      //       const result = await queryFulfilled;
      //       const userInfo = getState()?.auth;

      //       const newUserInfo = { ...userInfo, user: result?.data?.data };

      //       localStorage.setItem("spohireAuth", JSON.stringify(newUserInfo));

      //       dispatch(userLoggedIn(newUserInfo));
      //     } catch (err) {
      //       // do nothing, handle from ui
      //     }
      //   },
    }),
  }),
});

export const { useResetPasswordMutation } = settingsApi;
