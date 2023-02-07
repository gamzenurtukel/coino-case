import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface cartState {
  cartList: any[];
  id: number;
}

const initialState = { cartList: [] } as any as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<cartState>) => {
      const product: any = state.cartList.find(
        (item: any) => item.id === action.payload.id
      );
      if (product) {
        product.quantity++;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export const getAllCart = (state: RootState) => state.carts.cartList;
export default cartSlice.reducer;
