import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const observationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    toggleObservation: builder.mutation({
      query: (data) => ({
        url: "/api/v1/observations/cd",
        method: "POST",
        body: data,
      }),
    }),
    getMyObservations: builder.query({
      query: () => "/api/v1/observations/my-observations",
    }),
    getAllObservations: builder.query({
      query: () => "/api/v1/observations/my-observations",
    }),
    getUserObservationById: builder.query({
      query: (userId) => `/api/v1/observations/${userId}`,
    }),
  }),
});

export const {
  useToggleObservationMutation,
  useGetAllObservationsQuery,
  useGetMyObservationsQuery,
  useGetUserObservationByIdQuery,
} = observationApi;
