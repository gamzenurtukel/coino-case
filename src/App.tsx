import "./App.scss";

import { useEffect } from "react";
import { fetchAsyncProducts } from "./redux/slices/productSlice";
import { useAppDispatch } from "./redux/hook";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, [dispatch]);
  return <div className="App"></div>;
}

export default App;
