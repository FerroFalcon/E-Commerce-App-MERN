import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard.js";
import { getAllProducts } from "../../redux/actions/productActions";

function ProductRow() {
  const [totalProducts, setTotalProducts] = useState([]);
  const allProductsList = useSelector((state) => state.productReducer);
  const { products } = allProductsList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    setTotalProducts([products.data][0]);
  }, [products]);

  console.log(totalProducts);

  return (
    <div className="product_row flex overflow-x-scroll overflow-y-hidden">
      {totalProducts.map((product) => (
        <ProductCard
          productName={product.productName}
          brand={product.brand}
          price={product.price}
          quantity={product.quantity}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductRow;
