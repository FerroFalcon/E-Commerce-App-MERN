import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function ProductCard() {
  return (
    <div>
      <div>
        <img
          src="https://www.bigbasket.com/pd/10000069/fresho-capsicum-green-500-g/?nc=My%20Smart%20Basket&t_pg=/nov-t1-home-page/&t_p=nov-t1-2022&t_s=My%20Smart%20Basket&t_pos_sec=1&t_pos_item=1&t_ch=desktop"
          alt="product-img"
        />
        <p>
          <AiOutlineHeart />
        </p>
      </div>
      <div>
        <p>product name</p>
        <p>price</p>
        <p>quantity</p>
      </div>
      <button>ADD</button>
    </div>
  );
}

export default ProductCard;
