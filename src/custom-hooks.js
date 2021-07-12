import products from './products.json'
import { useState } from "react";

const useProducts= (catid,product= products)=>{
    let filteredProducts = product;
    if(!!catid)
    filteredProducts = product.filter(prod => prod.categoryId === catid);
    const [products,setProducts] = useState(filteredProducts)
    return [products,setProducts]
}

export{useProducts}
