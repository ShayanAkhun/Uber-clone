import { configureStore } from "@reduxjs/toolkit";
import navReducer from "../Slice/Slice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
