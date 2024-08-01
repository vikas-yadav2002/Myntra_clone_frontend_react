import { createSlice } from '@reduxjs/toolkit';
import items from './items';

const ItemSlice = createSlice({
  name: 'items',
  initialState: items,
  reducers: {
    addItemReducer: (state, action) => {
      return state;
    },
  },
});

export const itemAction = ItemSlice.actions;
export default ItemSlice;