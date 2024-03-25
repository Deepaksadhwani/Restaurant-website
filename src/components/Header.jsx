import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex  justify-between  px-40 items-center h-28 bg-gradient-to-r from-yellow-500 to-orange-600">
      <div>
        <h1 className="text-2xl font-semibold border-green-400  text-white">
          ReactMeals
        </h1>
      </div>
      <div className="flex space-x-4 text-2xl items-center font-semibold text-white">
        <FaShoppingCart />
        <h3>Your Cart</h3>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default Header;
