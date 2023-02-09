import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface sortState {
  selectedSortValue: any;
}

const initialState = {
  selectedSortValue: [],
} as sortState;

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setSelectedSort: (state, action: PayloadAction<sortState>) => {
      state.selectedSortValue = action.payload;
    },
  },
});

export const selectedSort = (state: RootState) => state.sorts.selectedSortValue;
export const { setSelectedSort } = sortSlice.actions;
export default sortSlice.reducer;
