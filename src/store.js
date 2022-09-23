import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export default configureStore({
  reducer: {},
  preloadedState: {},
  middleware: [thunk],
  //devTools: process.env.NODE_ENV !== "production",
});
