import { configureStore, createSlice } from "@reduxjs/toolkit";
import ItemSlice from "./Itemslicer";
import FetchingItemStatusSlice from "./FetchingStatusSlice";
import BagSlice from "./BagSlice";

const myntraStore = configureStore({
  reducer: { items: ItemSlice.reducer ,
    fetching : FetchingItemStatusSlice.reducer , 
    Bag : BagSlice.reducer},
});

export default myntraStore;
