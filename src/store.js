import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailReducers,
} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
});

export default configureStore({
  reducer,
  preloadedState: {},
  middleware: [thunk],
  //devTools: process.env.NODE_ENV !== "production",
});
