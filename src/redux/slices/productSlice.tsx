import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import productApi from "../services/productApi";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await productApi.get(`/products`);
    return response.data;
  }
);

interface productState {
  productList: {};
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState = {
  productList: [],
  loading: "idle",
} as productState;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchAsyncProducts.fulfilled,
      (state, action: PayloadAction<productState>) => {
        state.productList = action.payload;
        state.loading = "succeeded";
      }
    );
  },
});
export const getAllProducts = (state: RootState) => state.products.productList;
export default productSlice.reducer;
