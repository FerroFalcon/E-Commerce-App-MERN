import "./App.css";
import Carousel from "./Components/banner/Carousel";
import CategoryList from "./Components/category list/CategoryList.js";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryList />
      <Carousel />
    </div>
  );
}

export default App;
