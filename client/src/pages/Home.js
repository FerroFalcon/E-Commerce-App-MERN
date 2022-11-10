import Navbar from "../Components/navbar/Navbar";
import CategoryRow from "../Components/category/CategoryRow.js";
import Carousel from "../Components/banner/Carousel";
import ProductRow from "../Components/product/ProductRow.js";

function Home() {
  return (
    <div>
      <Navbar />
      <CategoryRow />
      <Carousel />
      <ProductRow />
    </div>
  );
}

export default Home;
