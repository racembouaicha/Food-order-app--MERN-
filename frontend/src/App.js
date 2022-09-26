import React from "react";
import "./App.css";
import { useState } from "react";

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";
function App() {
  const [cartIsshown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hidaCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hidaCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
