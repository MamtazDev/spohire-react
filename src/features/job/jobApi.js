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
      invalidatesTags: ["Jobs"],
    }),
    getAllJobs: builder.query({
      query: () => "/api/v1/jobs/",
      providesTags: ["Jobs"],
    }),
    getJobById: builder.query({
      query: (id) => `/api/v1/jobs/${id}`,
    }),
    applyForTheJob: builder.mutation({
      query: (data) => ({
        url: "/api/v1/job-applies/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddJobMutation,
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useApplyForTheJobMutation,
} = jobApi;
