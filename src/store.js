import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailReducers,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailReducers,
  cart: cartReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

export default configureStore({
  reducer,
  preloadedState: { cart: { cartItems: cartItemsFromLocalStorage } },
  middleware: [thunk],
  //devTools: process.env.NODE_ENV !== "production",
});
