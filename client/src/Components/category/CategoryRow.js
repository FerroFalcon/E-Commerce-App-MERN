import CategoryItem from "./CategoryItem";
import categories from "../../Categories.js";

function CategoryList() {
  return (
    <div className="flex justify-center">
      {categories.map((category) => (
        <CategoryItem
          key={category._id}
          productImg={category.productImg}
          productCategory={category.productCategory}
        />
      ))}
    </div>
  );
}

export default CategoryList;
