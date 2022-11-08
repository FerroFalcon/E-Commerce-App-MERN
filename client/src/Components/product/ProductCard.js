import { AiOutlineHeart } from "react-icons/ai";

function ProductCard({ productName, brand, price, quantity, image }) {
  return (
    <>
      <div>
        <img src={image} alt="product-img" />
        <button>
          <AiOutlineHeart />
        </button>
      </div>
      <div>
        <p>{brand}</p>
        <p>{productName}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </div>
      <button>ADD</button>
    </>
  );
}

export default ProductCard;
