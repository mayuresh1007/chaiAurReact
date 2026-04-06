

// /**
//  * state is current state
//  * action is holding the payload data which is comming in
//  *
//  *



import { createSlice } from "@reduxjs/toolkit";

// Fixed typo: "initialState" instead of "initicalState"
const initialState = {
  items: ['banana'],
};

const cartSlice = createSlice({
  name: "cart",
  // Fixed typo: "initialState" instead of "initicalStat"
  initialState, 
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit uses Immer, so this "mutating" logic is perfectly safe!
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0; // Or state.items = []
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;