import { useState } from "react";
import { useEffect } from "react";
import { useCart, useCartUpdate } from "../../cartContext";
import { getProduct, toItemsArray } from "../../utils";
import NavBar from "../NavBar";

const CheckoutPage = () => {
  const { cart } = useCart();
  const [cart_array, setCartArray] = useState([]);
  const { deleteItem,setCount } = useCartUpdate();

  useEffect(() => {
    setCartArray(toItemsArray(cart));
  }, [cart]);
  return (
    <>
      <NavBar />
      <div className="CheckoutPage">
        <table>
          <tbody>
            <tr className="table-row">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
            {cart_array.map((item) => {
              const product = getProduct(item.id);
              if(item.count === 0){
                  return null;
              }
              return (
                <tr className="table-row" key={item.id}>
                  <td>
                    <img
                      className="sm-img"
                      src={product.thumbnail}
                      alt={product.name}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <input className="checkout-input" onChange={(e)=>{
                        setCount(item.id,e.target.value)
                    }} type="number" value={cart[item.id]}/>
                  </td>
                  <td>
                    <button onClick={()=>{deleteItem(item.id)}} className="checkout-button">X</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CheckoutPage;
