import "./App.css";
import BannerHome from "./Components/banner/BannerHome";
import CategoryList from "./Components/category list/CategoryList.js";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryList />
      {/* <BannerHome /> */}
    </div>
  );
}

export default App;
