import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
const newState = cartSlice.reducer(
  { items: [] },
  cartSlice.actions.addItem("pizza")
);
console.log(newState);
// {value: 11}
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
