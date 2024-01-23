import { apiSlice } from "../api/apiSlice";

export const notificationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNotification: builder.mutation({
      query: (data) => ({
        url: "/api/v1/notification/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Notifications"],
    }),
    getMyNotifications: builder.query({
      query: () => "/api/v1/notification/myNotifications",
      providesTags: ["Notifications"],
    }),
    deleteNotification: builder.mutation({
      query: (id) => ({
        url: `/api/v1/notification/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notifications"],
    }),
  }),
});

export const {
  useCreateNotificationMutation,
  useGetMyNotificationsQuery,
  useDeleteNotificationMutation,
} = notificationApi;
