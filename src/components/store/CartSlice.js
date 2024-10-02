import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  items: JSON.parse(localStorage.getItem('cartItems')) || [] 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    remove: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
