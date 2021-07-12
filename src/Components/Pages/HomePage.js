import categories from "../../categories.json";
import Category from "../Category";
import { memo, useState } from "react";
import CartStateBadge from "../CartStateBadge";
import NavBar from "../NavBar";
// import { useCart } from "../cartContext";
// import { toItemsArray } from "../utils";

const HomePage = () => {
  const [categoriesData] = useState(categories);
  // const cart = toItemsArray(useCart());

  return (
    <div>
      <h1 className="heading">Welcome to Shopping App!</h1>
      <CartStateBadge/>
      <div className="show">
        <Category categories={categoriesData}/>
      </div>
    </div>
  );
};

export default memo(HomePage);
