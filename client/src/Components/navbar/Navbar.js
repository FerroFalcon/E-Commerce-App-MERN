import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";

function Navbar() {
  const navStyle = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "blue" : "red",
    };
  };

  return (
    <div className="flex justify-around p-6 bg-emerald-100">
      {/* left nav logo*/}
      <p className="text-2xl md:text-3xl font-bold text-emerald-600">
        InstaCart
      </p>

      {/* search bar nav */}
      <div className="flex items-center shadow-md rounded-md py-2 px-3  bg-white ">
        <AiOutlineSearch className="text-xl text-slate-400" />
        <input className="ml-2 w-13 outline-none" placeholder="Search" />
      </div>

      {/* cart side options right */}
      <div className="flex items-center ">
        <NavLink to="/cart" style={navStyle}>
          <AiOutlineShoppingCart className="text-2xl ml-4 cursor-pointer" />
        </NavLink>

        <NavLink to="/wishlist" style={navStyle}>
          <AiOutlineHeart className="text-2xl ml-4 cursor-pointer" />
        </NavLink>

        <NavLink to="/userpage" style={navStyle}>
          <AiOutlineUser className="text-2xl ml-4 cursor-pointer" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
