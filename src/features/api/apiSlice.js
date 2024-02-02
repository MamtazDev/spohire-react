import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NODE_ENV !== "production"
        ? import.meta.env.VITE_LOCAL_API_URL
        : import.meta.env.VITE_LIVE_API_URL,
    prepareHeaders: async (headers, { getState, endpoints }) => {
      const token = getState()?.auth?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [
    "Jobs",
    "Announcements",
    "MyObservations",
    "Conversations",
    "Messages",
    "Notifications",
    "MyAppliedJobs",
    "ReferralUsers",
  ],
  endpoints: (builder) => ({}),
});
