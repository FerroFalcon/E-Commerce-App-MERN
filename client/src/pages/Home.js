import { useState, useEffect } from "react";
import Navbar from "../Components/navbar/Navbar";
import CategoryRow from "../Components/category/CategoryRow.js";
import Carousel from "../Components/banner/Carousel";
import ProductRow from "../Components/product/ProductRow.js";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const res = await fetch("http://localhost:4000/product");
    const { data } = await res.json();
    console.log(data);
    setProducts(data);
  }

  return (
    <div>
      <Navbar />
      <CategoryRow />
      <Carousel />
      <ProductRow products={products} />
    </div>
  );
}

export default Home;
