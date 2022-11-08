import React from "react";

function CategoryItem({ productImg, productCategory }) {
  return (
    <>
      <div className="w-36 flex flex-col bg-white drop-shadow-md rounded-md m-3 p-2">
        <img className="h-20" src={productImg} alt="" />
        <p className="text-gray-700 text-center text-[0.7rem] mt-1 ">
          {productCategory}
        </p>
      </div>
    </>
  );
}

export default CategoryItem;
