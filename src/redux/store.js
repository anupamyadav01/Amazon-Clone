import { configureStore } from "@reduxjs/toolkit";

import amazomReducer from "./amazomSlice";
export const store = configureStore({
  reducer: { amazomReducer },
});
