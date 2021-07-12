import { useParams } from "react-router";
import { useProducts } from "../../custom-hooks";
import CartStateBadge from "../CartStateBadge";
import NavBar from "../NavBar";
import Product from "../Product";
import Filter from "../Filter";
import { useEffect } from "react";
import { addCartToLocalStorage } from "../../utils";
import { useCart } from "../../cartContext";
const CategoryPage = () => {
  const { catid } = useParams();
  const { cart } = useCart();
  const [products,setProducts]= useProducts(catid);
  useEffect(()=>{
    return ()=>{
      addCartToLocalStorage(cart);
    }
  },[cart])
  return (<>
    <NavBar className="header"/>
    <CartStateBadge className="right"/>
    <div className="category-page">
      <Filter catid={catid} setProducts={setProducts} product={products} className="filter"/>
      <div className="products main">
        {products.map((p) => (
          <Product cart={cart} key={p.id} {...p} />
        ))}
      </div>
    </div>
    </>
  );
};

export default CategoryPage;
