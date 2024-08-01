import { createSlice } from '@reduxjs/toolkit';


const FetchingItemStatusSlice = createSlice({
    name: 'fetching',
    initialState: {
      fetchDone: false,
      currentlyFetching: false
    },
    reducers: {
      markFetchDone: (state) => {
        return { ...state, fetchDone: true };
      },
      startFetching: (state) => {
        return { ...state, currentlyFetching: true };
      },
      FetchingEnded: (state) => {
        return { ...state, currentlyFetching: false };
      },
    },
  });
  
  export const fetchingAction = FetchingItemStatusSlice.actions;
  export default FetchingItemStatusSlice;