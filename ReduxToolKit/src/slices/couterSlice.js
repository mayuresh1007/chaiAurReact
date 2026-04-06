// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   count: 0,
// };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     increment: (state, action) => {
//       state.count += action.payload;
//     },
//     decrement: (state, action) => {
//       state.count -= action.payload;
//     },
//   },
// });

// export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // Only increment if count is less than 10
      if (state.count < 10) {
        state.count += 1;
      }
    },
    decrement: (state) => {
      // Only decrement if count is greater than 0
      if (state.count > 0) {
        state.count -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;