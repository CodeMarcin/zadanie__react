import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import dataSlice from "./dataSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>;
