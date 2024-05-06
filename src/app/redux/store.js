import { configureStore } from "@reduxjs/toolkit";
import applyFiltersSlice from "./slices/applyFiltersSlice";

//connecting reducer to store
export const store = configureStore({
  reducer: {
    applyFilters: applyFiltersSlice,
  },
});
