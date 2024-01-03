import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const chatApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createConversation: builder.mutation({
      query: (data) => ({
        url: "/api/v1/chats/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Conversations", "Messages"],
    }),
    getMessagesByConversationId: builder.query({
      query: (coversationId) => `/api/v1/messages/${coversationId}`,
      providesTags: ["Messages"],
    }),
    addMessages: builder.mutation({
      query: (data) => ({
        url: "/api/v1/messages/add-message",
        method: "POST",
        body: data,
      }),
    }),
    getUserAllConversations: builder.query({
      query: (userId) => `/api/v1/chats/${userId}`,
      providesTags: ["Conversations"],
    }),
  }),
});

export const {
  useCreateConversationMutation,
  useGetMessagesByConversationIdQuery,
  useAddMessagesMutation,
  useGetUserAllConversationsQuery,
} = chatApi;
