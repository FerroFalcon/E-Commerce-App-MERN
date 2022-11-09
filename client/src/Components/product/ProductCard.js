import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard({ productName, brand, price, quantity, image }) {
  return (
    <div className="flex flex-col bg-white text-gray-700 drop-shadow-md rounded-md w-48 h-96 ml-5 my-10 p-2">
      <div>
        <img src={image} alt="product-img" />
        <button>
          <AiOutlineHeart />
        </button>
      </div>
      <div>
        <p className="text-gray-400 text-sm ">{brand}</p>
        <p className="my-1">{productName.substr(0, 40)}</p>
        <p className="text-sm">Rs {price}</p>
        <p className="text-sm">{quantity}</p>
      </div>
      <button className="w-20 bg-yellow-400 rounded-md flex px-2 absolute bottom-2">
        <span>+ADD</span>
        <AiOutlineShoppingCart className="ml-1 mt-1" />
      </button>
    </div>
  );
}

export default ProductCard;
