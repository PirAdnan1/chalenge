import React from "react";

// components
import CartData from "./CartData";

function CartMain({ products }) {
  return (
    <div>
      <CartData products = {products} />
    </div>
  );
}

export default CartMain;
