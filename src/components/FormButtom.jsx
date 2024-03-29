import React, { useState, useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import cartContext from "../store/cartContext";

const FormButton = () => {
  const [amount, setAmount] = useState(1);
  const { addToCart } = useContext(cartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    addToCart({ id: "c1", name: "Sushi", amount: amount, price: 12.99 });
    setAmount(1); // Reset the amount input after submitting
  };

  return (
    <form className="space-x-4 space-y-2 " onSubmit={submitHandler}>
      <label className="font-medium">Amount</label>
      <input
        type="number"
        className="h-6 w-12 rounded-md border border-gray-700 bg-gray-100 text-center font-medium"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        type="submit"
        className="flex h-7 w-16 rounded border-2 border-gray-700 bg-black pl-2 text-white transition-all duration-200 hover:bg-gradient-to-bl hover:from-black hover:to-gray-600 "
      >
        + Add
      </button>
    </form>
  );
};

export default FormButton;
