import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "date",
  announcementLocation: null,
};

const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setannouncementLocation: (state, action) => {
      state.announcementLocation = action.payload;
    },
  },
});

export const { setFilter, setannouncementLocation } = announcementSlice.actions;
export default announcementSlice.reducer;
