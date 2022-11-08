import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import CategoryRow from "./Components/category/CategoryRow.js";
import Carousel from "./Components/banner/Carousel";
import ProductRow from "./Components/product/ProductRow.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryRow />
      <Carousel />
      <ProductRow />
    </div>
  );
}

export default App;
