import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/users/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "spohireAuth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing, handle from ui
        }
      },
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/api/v1/users/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "spohireAuth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing, handle from ui
        }
      },
    }),
    getAllUsers: builder.query({
      query: () => "/api/v1/users",
    }),
    getUserById: builder.query({
      query: (id) => `/api/v1/users/${id}`,
    }),
    updateUser: builder.mutation({
      query: ({ userId, data }) => ({
        url: `/api/v1/users/${userId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    updateProfileCreationStatus: builder.mutation({
      query: (userId) => ({
        url: `/api/v1/users/updateAddProfile/${userId}`,
        method: "PATCH",
      }),
    }),
    getFilteredUsers: builder.query({
      query: (queryString) => `/api/v1/users/filteredUsers?${queryString}`,
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useGetFilteredUsersQuery,
  useUpdateProfileCreationStatusMutation,
} = authApi;
