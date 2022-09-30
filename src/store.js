import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { productListReducers } from "./reducers/productReducers";

const reducer =  combineReducers(
  {
    productList: productListReducers
  }
)

export default configureStore({
  reducer,
  preloadedState: {},
  middleware: [thunk],
  //devTools: process.env.NODE_ENV !== "production",
});
