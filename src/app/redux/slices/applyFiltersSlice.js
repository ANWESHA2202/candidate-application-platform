import { createSlice } from "@reduxjs/toolkit";

export const applyFiltersSlice = createSlice({
  name: "applyFilters",
  initialState: {
    filters: [],
    jobCards: [],
  },
  reducers: {
    applyFilter: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { applyFilter } = applyFiltersSlice.actions;
export default applyFiltersSlice.reducer;
