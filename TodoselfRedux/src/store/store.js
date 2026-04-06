import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todosSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
