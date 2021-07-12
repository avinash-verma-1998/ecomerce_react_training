import { useState } from "react";
import { Redirect } from "react-router";

const CategoryItem = ({ id,name, description }) => {

    const [redirect,setRedirect] = useState(false);


  return (
      <div className="card"  onClick={()=>{setRedirect(p=> !p)}}>
      <div className="container">
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
      {redirect ? <Redirect to={`/categories/${id}`} /> : null}
    </div>
    
  );
};
export default CategoryItem;
