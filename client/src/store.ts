import { configureStore } from "@reduxjs/toolkit";
import toDoSlice from "./slice";

export const store = configureStore({
  reducer: {
    [toDoSlice.name]: toDoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
