import "./App.scss";

import React, { useEffect } from "react";
import { fetchAsyncProducts } from "./redux/slices/productSlice";
import { useAppDispatch } from "./redux/hook";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ProductList from "./components/productList";
import CartProductList from "./components/cartProductList";
import FavoriteProductList from "./components/favoriteProductList";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartProductList />} />
        <Route path="/favorite" element={<FavoriteProductList />} />
      </Routes>
    </div>
  );
}

export default App;
