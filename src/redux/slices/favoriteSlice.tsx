import { createSlice } from "@reduxjs/toolkit";

interface cartState {
  favoriteList: any[];
  id: number;
}

const initialState = { favoriteList: [] } as any as cartState;

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
});

export default favoriteSlice.reducer;
