import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import paymentReducer from "../features/payment/paymentSlice";
import chatReducer from "../features/chat/chatSlice";
import jobReducer from "../features/job/jobSlice";
import announcementReducer from "../features/announcement/announcementSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    payment: paymentReducer,
    chat: chatReducer,
    job: jobReducer,
    announcement: announcementReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
