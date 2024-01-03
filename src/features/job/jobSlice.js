import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobType: null,
  JobLocation: null,
  jobCategory: null,
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobType: (state, action) => {
      state.jobType = action.payload;
    },
    setJobLocation: (state, action) => {
      state.JobLocation = action.payload;
    },
    setJobCategory: (state, action) => {
      state.jobCategory = action.payload;
    },
  },
});

export const { setJobType, setJobLocation, setJobCategory } = jobSlice.actions;
export default jobSlice.reducer;
