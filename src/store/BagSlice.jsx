import { createSlice } from '@reduxjs/toolkit';
import items from './items';

const BagSlice = createSlice({
  name: 'Bag',
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      return [...state , action.payload];
    },
    removeFromBag : (state , action)=>{
      return state.filter(item =>  item !== action.payload);
    },
  },
});

export const BagAction = BagSlice.actions;
export default BagSlice;