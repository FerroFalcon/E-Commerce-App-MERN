import React from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import products from "../../Products";

function CategoryList() {
  return (
    <div className="flex justify-center">
      {products.map((product) => (
        <CategoryItem
          id={product._id}
          productImg={product.productImg}
          productCategory={product.productCategory}
        />
      ))}
    </div>
  );
}

export default CategoryList;
