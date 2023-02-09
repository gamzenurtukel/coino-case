import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import favoriteSlice from "./slices/favoriteSlice";
import productSlice from "./slices/productSlice";
import sortSlice from "./slices/sortSlice";

export const store = configureStore({
  reducer: {
    products: productSlice,
    carts: cartSlice,
    favorites: favoriteSlice,
    sorts: sortSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
