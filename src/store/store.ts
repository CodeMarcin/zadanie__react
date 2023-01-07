import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import siteSlice from "../siteSlice/siteSlice";

export const store = configureStore({
  reducer: {
    site: siteSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>;
