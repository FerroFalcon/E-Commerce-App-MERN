import React from "react";

function CategoryItem({ productImg, productCategory }) {
  return (
    <>
      <div className="w-28 flex flex-col bg-gray-200 rounded-md m-3">
        <img className="px-5" src={productImg} alt="" />
        <p className="text-sm font-medium text-gray-700 text-center">
          {productCategory}
        </p>
      </div>
    </>
  );
}

export default CategoryItem;
