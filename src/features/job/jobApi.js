import { apiSlice } from "../api/apiSlice";

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
    getAppliedJobs: builder.query({
      query: () => "/api/v1/job-applies/appliedJobs",
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/api/v1/jobs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Jobs"],
    }),
    editJob: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/jobs/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Jobs"],
    }),
  }),
});

export const {
  useAddJobMutation,
  useGetAllJobsQuery,
  useGetJobByIdQuery,
  useApplyForTheJobMutation,
  useGetAppliedJobsQuery,
  useDeleteJobMutation,
  useEditJobMutation,
} = jobApi;
