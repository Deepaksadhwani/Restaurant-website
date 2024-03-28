import React from "react";
import Modal from "./Modal";

const Cart = ({ onHideCart }) => {
  return (
    <div>
      <Modal hideCart={onHideCart} />
    </div>
  );
};

export default Cart;
