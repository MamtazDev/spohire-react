import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
  playerFilterParams: {
    sports: null,
    country: null,
    categories: null,
  },
  coachFilterParams: {
    sports: null,
    country: null,
    categories: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
    setPlayerFilterParams: (state, action) => {
      const { type, data } = action.payload;

      switch (type) {
        case "sports":
          state.playerFilterParams.sports = data;
          return;
        case "country":
          state.playerFilterParams.country = data;
          return;
        case "categories":
          state.playerFilterParams.categories = data;
          return;

        default:
          return;
      }
    },
    setCoachFilterParams: (state, action) => {
      const { type, data } = action.payload;

      switch (type) {
        case "sports":
          state.coachFilterParams.sports = data;
          return;
        case "country":
          state.coachFilterParams.country = data;
          return;
        case "categories":
          state.coachFilterParams.categories = data;
          return;

        default:
          return;
      }
    },
  },
});

export const {
  userLoggedIn,
  userLoggedOut,
  setPlayerFilterParams,
  setCoachFilterParams,
} = authSlice.actions;
export default authSlice.reducer;
