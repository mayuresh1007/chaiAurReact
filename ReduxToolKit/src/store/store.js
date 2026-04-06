import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../slices/cartSlice";
import counterSlice from "../slices/couterSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    counter: counterSlice,
  },
});

export default store;
