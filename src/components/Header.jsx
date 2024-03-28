import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Header = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const showOrderCartHandler = () => {
    setIsOpen(true);
  };

  const hideOrderCartHandler = () => {
    setIsOpen(false);
  }

  return (
    <div>
      {" "}
      {isOpen && <Cart onHideCart={hideOrderCartHandler}></Cart>}
      <div className="flex justify-between  px-40 items-center h-20 bg-gradient-to-r from-yellow-500 to-orange-600">
        <div>
          <h1 className="text-2xl font-semibold border-green-400 select-none text-white">
            ReactMeals
          </h1>
        </div>
        <button
          onClick={showOrderCartHandler}
          className="flex space-x-4 text-2xl items-center hover:scale-[1.1] transition-all duration-200 hover:border-2 border-yellow-500 p-2 hover:rounded-lg font-semibold text-white"
        >
          <FaShoppingCart />
          <h3>Your Cart</h3>
          <span>{count}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
