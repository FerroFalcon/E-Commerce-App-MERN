// import { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

function ProductCard({ productName, brand, price, quantity, image }) {
  // const [cartProduct, setCartProduct] = useState({});

  // useEffect(() => {
  //   async function fetchCart() {
  //     const res = await fetch("http://localhost:4000/transaction", {
  //       method: "POST",
  //       body: JSON.stringify(cartProduct),
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     });
  //     if (res.ok) {
  //       setCartProduct({});
  //     }
  //   }
  //   fetchCart();
  // }, [cartProduct]);

  // const addToCartHandler = () => {
  //   setCartProduct({
  //     product: productName,
  //     brand: brand,
  //     price: price,
  //     image: image,
  //   });
  // };

  return (
    <div>
      <div className="flex flex-col bg-white text-gray-700 drop-shadow-md rounded-md w-48 h-96 ml-5 my-10 p-2">
        <div>
          <img src={image} alt="product-img" />
          <button>
            <AiOutlineHeart />
          </button>
        </div>
        <div>
          <p className="text-gray-400 text-sm ">{brand}</p>
          <p className="font-semibold my-1">{productName.substr(0, 37)}</p>
          <p className="text-sm">Rs {price}</p>
          <p className="text-sm">{quantity}</p>
        </div>
        <button
          // onClick={addToCartHandler}
          className="w-20 bg-yellow-400 rounded-md flex px-2 absolute bottom-2"
        >
          <span>+ADD</span>
          <AiOutlineShoppingCart className="ml-1 mt-1" />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
