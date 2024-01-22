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
    deleteAnnouncement: builder.mutation({
      query: (id) => ({
        url: `/api/v1/announcements/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Announcements"],
    }),
    editAnnoucement: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/v1/announcements/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Announcements"],
    }),
  }),
});

export const {
  useAddAnnouncementMutation,
  useGetAllAnnouncementQuery,
  useGetAnnouncementByIdQuery,
  useDeleteAnnouncementMutation,
  useEditAnnoucementMutation,
} = announcementApi;
