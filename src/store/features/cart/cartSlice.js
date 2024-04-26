import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      if (state.items[productId]) {
        state.items[productId].quantity += quantity;
      } else {
        state.items[productId] = { quantity };
      }
    },
    incrementQuantity: (state, action) => {
      const { productId } = action.payload;
      if (state.items[productId]) {
        state.items[productId].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const { productId } = action.payload;
      if (state.items[productId] && state.items[productId].quantity > 0) {
        state.items[productId].quantity -= 1;
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
