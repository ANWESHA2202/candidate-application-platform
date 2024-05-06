import { createSlice } from "@reduxjs/toolkit";
import { findFilteredData } from "../../../components/utils";

export const applyFiltersSlice = createSlice({
  name: "applyFilters",
  initialState: {
    filters: {
      Roles: [],
      Experience: [],
      Remote: [],
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
      const existingJobUids = state.jobCards.map((card) => card.jdUid);
      const newJobCards = action.payload.filter((jd) => {
        return !existingJobUids.includes(jd.jduid);
      });
      state.jobCards = [...state.jobCards, ...newJobCards];
      state.filteredJobCards = findFilteredData(state.filters, state.jobCards);
    },
    applyFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      let filteredData = findFilteredData(state.filters, state.jobCards);
      state.filteredJobCards = filteredData;
    },
  },
});

export const { updateTotalJobCount, loadJobCards, applyFilter } =
  applyFiltersSlice.actions;
export default applyFiltersSlice.reducer;
