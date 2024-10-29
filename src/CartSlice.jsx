import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      // Add item to the cart
      const alreadyAddedProduct = state.items.find(
        (item) => item.name === name
      );

      if (alreadyAddedProduct) {
        alreadyAddedProduct.quantity += 1;
      } else {
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },
    removeItem: (state, action) => {
      console.log({ action });
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
