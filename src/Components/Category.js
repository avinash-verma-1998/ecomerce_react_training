import CategoryItem from "./CategoryItem";

const Category = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map(({id, name, description}) => {
        return <CategoryItem key={id} id={id} name={name} description={description} />;
      })}
    </div>
  );
};

export default Category;
