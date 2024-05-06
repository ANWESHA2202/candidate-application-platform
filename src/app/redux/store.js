import { configureStore } from "@reduxjs/toolkit";
import applyFiltersSlice from "./slices/applyFiltersSlice";

export const store = configureStore({
  reducer: {
    applyFilters: applyFiltersSlice,
  },
});
