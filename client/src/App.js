import "./App.css";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import Nomatch from "./pages/Nomatch.js";
import Login from "./pages/Login.js";
import SignUp from "./pages/SignUp.js";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist.js";
import Product from "./pages/Product.js";
import UserPage from "./pages/UserPage.js";

// authentication login register
// redux

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/:id" element={<Product />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
