import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "date",
  announcementLocation: null,
  filterParams: {
    sports: [],
    country: [],
    categories: [],
  },
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
    setFilterParams: (state, action) => {
      const { type, data } = action.payload;
      const { sports, country, categories } = state.filterParams;

      switch (type) {
        case "sports":
          if (sports.includes(data)) {
            const newSports = sports.filter((i) => i !== data);
            sports = newSports;
          } else {
            sports.push(data);
          }
          return;
        case "country":
          if (country.includes(data)) {
            const newCountries = country.filter((i) => i !== data);
            country = newCountries;
          } else {
            country.push(data);
          }
          return;
        case "categories":
          if (categories.includes(data)) {
            const newCategories = categories.filter((i) => i !== data);
            categories = newCategories;
          } else {
            categories.push(data);
          }
          return;

        default:
          return;
      }
    },
  },
});

export const { setFilter, setannouncementLocation, setFilterParams } =
  announcementSlice.actions;
export default announcementSlice.reducer;
