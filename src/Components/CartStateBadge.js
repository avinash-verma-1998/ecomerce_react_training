// import { useState } from "react";
import { useHistory } from "react-router";
import { useCart } from "../cartContext";
import { calculateCartState, toItemsArray } from "../utils";

const CartStateBadge = () => {
  const { cart } = useCart();
  const { total, no_of_items } = calculateCartState(toItemsArray(cart));
  const history = useHistory();
  const goToCheckout = () => {
    history.push("/cart");
  }
  return (
    <div className="cart-badge" onClick={goToCheckout}>
      <span className="badge">
        {no_of_items}{"     "}
      </span>
      <span className="total">${total}.00</span>
    </div>
  );
};

export default CartStateBadge;
