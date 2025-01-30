import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: userReducer,
});

export type AppDispatch = typeof store.dispatch;
export default store;
