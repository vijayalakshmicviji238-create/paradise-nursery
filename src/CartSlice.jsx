import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const incoming = action.payload;
      const existing = state.items.find(item => item.id === incoming.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...incoming, quantity: 1 });
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter(entry => entry.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;