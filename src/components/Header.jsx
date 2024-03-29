// Header.js
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Header = ({ cartItemCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showOrderCartHandler = () => {
    setIsOpen(true);
  };

  const hideOrderCartHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && <Cart onHideCart={hideOrderCartHandler} />}
      <div className="flex h-20  items-center justify-between bg-gradient-to-r from-yellow-500 to-orange-600 px-40">
        <div>
          <h1 className="select-none border-green-400 text-2xl font-semibold text-white">
            ReactMeals
          </h1>
        </div>
        <button
          onClick={showOrderCartHandler}
          className="flex items-center space-x-4 border-lime-500 p-2 text-2xl font-semibold text-white  transition-all duration-200 hover:scale-[1.1] hover:rounded-lg hover:border-2 "
        >
          <FaShoppingCart />
          <h3>Your Cart</h3>
          <span>{cartItemCount}</span> 
        </button>
      </div>
    </div>
  );
};

export default Header;
