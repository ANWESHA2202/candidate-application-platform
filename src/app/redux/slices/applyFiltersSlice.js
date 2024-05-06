import { createSlice } from "@reduxjs/toolkit";

export const applyFiltersSlice = createSlice({
  name: "applyFilters",
  initialState: {
    filters: {
      Roles: "",
      "Number Of Employees": "",
      Experience: "",
      Remote: "",
      "Minimum Base Pay Salary": "",
      "Search Company Name": "",
    },
    jobCards: [],
    filteredJobCards: [],
    totalJobCount: 0,
  },
  reducers: {
    updateTotalJobCount: (state, action) => {
      state.totalJobCount = action.payload;
    },
    loadJobCards: (state, action) => {
      state.jobCards = [...state.jobCards, ...action.payload];
    },
    applyFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { updateTotalJobCount, loadJobCards, applyFilter } =
  applyFiltersSlice.actions;
export default applyFiltersSlice.reducer;
