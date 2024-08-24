import {createSlice} from '@reduxjs/toolkit';

import {
  IUserState,
  IUserCartAddAction,
  IUserCartRemoveAction,
} from './userTypes';

const initialState: IUserState = {
  currency: '£',
  cart: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToCart: (state, action: IUserCartAddAction) => {
      const existingItem = state.cart.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.count++;
      } else {
        state.cart.push({...action.payload, count: 1});
      }
    },
    removeFromCart: (state, action: IUserCartRemoveAction) => {
      const existingItem = state.cart.find(item => item.id === action.payload);
      if (existingItem) {
        if (existingItem.count > 1) {
          existingItem.count--;
        } else {
          state.cart = state.cart.filter(item => item.id !== action.payload);
        }
      }
    },
  },
});

export const {addToCart, removeFromCart} = userSlice.actions;

export default userSlice.reducer;
