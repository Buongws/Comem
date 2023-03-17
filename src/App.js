import Layout from "./components/Layout/Layout";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartSliceAction } from "./redux/cartSlice";
import { useEffect } from "react";

function App() {
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartSliceAction.calculateTotals());
  }, [cartItems, dispatch]);
  return (
    <>
      <Layout />;
    </>
  );
}

export default App;
