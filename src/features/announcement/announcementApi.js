import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const announcementApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addAnnouncement: builder.mutation({
      query: (data) => ({
        url: "/api/v1/announcements/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Announcements"],
    }),
    getAllAnnouncement: builder.query({
      query: () => "/api/v1/announcements/",
      providesTags: ["Announcements"],
    }),
    getAnnouncementById: builder.query({
      query: (id) => `/api/v1/announcements/${id}`,
    }),
  }),
});

export const {
  useAddAnnouncementMutation,
  useGetAllAnnouncementQuery,
  useGetAnnouncementByIdQuery,
} = announcementApi;
