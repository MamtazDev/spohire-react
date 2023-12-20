import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const jobApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addJob: builder.mutation({
      query: (data) => ({
        url: "/api/v1/jobs/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddJobMutation } = jobApi;
