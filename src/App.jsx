
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import cartContext from "./store/cartContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <cartContext.Provider value={{ items: cartItems }}>
      <div className="">
        <Header />
        <Body addToCart={addToCartHandler} />
      </div>
    </cartContext.Provider>
  );
};

export default App;
