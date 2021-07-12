import { memo, useEffect, useState } from "react";
import { useCartUpdate } from "../cartContext";
import { checkIfAdded } from "../utils";
import { currency_symbols } from "../utils";
const Product = ({ cart, id, name, thumbnail, price, currency, inStock }) => {

  const count = cart[id];
  const { addItem, increaseItemCount, removeItem } = useCartUpdate();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setIsAdded(checkIfAdded(cart, id));
  }, [cart, id]);

  const handleAddCart = () => {
    addItem(id);
  };
  const addTocart = () => {
    increaseItemCount(id);
  };

  const removeFromCart = () => {
    removeItem(id);
  };

  return (
    <div className="card">
      <img
        src={thumbnail}
        alt={name}
        className="product-image"
      />
      <div className="container">
        <h3>{name}</h3>
        <h3>
          {currency_symbols[currency]}
          {price}
        </h3>
        {inStock ? (
          <p className="text-green">InStock</p>
        ) : (
          <p className="text-red">Out of Stock</p>
        )}
        {isAdded ? (
          <>
            <button className="btn-sm" onClick={addTocart}>
              <span className="bold-text">+</span>
            </button>{" "}
            <div className="bold-text">{count}</div>{" "}
            <button className="btn-sm" onClick={removeFromCart}>
              <span className="bold-text">-</span>
            </button>
          </>
        ) : (
          <button
            className="btn"
            type="button"
            onClick={handleAddCart}
            disabled={!inStock}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default memo(Product);
