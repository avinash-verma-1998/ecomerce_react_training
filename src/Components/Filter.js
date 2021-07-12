import { useEffect,  useState } from "react";
import { calculateFilterState } from "../utils";

const Filter = ({product,setProducts,catid}) => {
  const [{  delivery,inStock, expensive }, setFilter] = useState({
      delivery:false,
    inStock: false,
    expensive: false,
  });
  const handleClick = (e)=>{
      setFilter(p=>{
          return{...p,
            [e.target.name]: !p[e.target.name] }
      });
  }
  useEffect(function(){
    product = calculateFilterState(catid,{delivery,inStock,expensive});
    setProducts(product);
}
 ,[delivery,inStock,expensive])
  return (
    <div className="filter">
      <h2>Filters</h2>
      <ul>
        <li className="filter-items">
          <input name="delivery" onChange={handleClick} checked={delivery} id="delivery" type="checkbox" />
          <label htmlFor="delivery"> delivery</label>
        </li>
        <li className="filter-items">
          <input name="expensive"checked={expensive} onChange={handleClick} id="expensive" type="checkbox" />
          <label htmlFor="expensive"> expensive</label>
        </li>
        <li className="filter-items">
          <input name="inStock" checked={inStock} onChange={handleClick} id="inStock" type="checkbox" />
          <label htmlFor="inStock"> inStock</label>
        </li>
      </ul>
    </div>
  );
};
export default Filter;
