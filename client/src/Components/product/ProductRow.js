import products from "../../Products.js";
import ProductCard from "./ProductCard.js";
function ProductRow() {
  return (
    <div>
      <div className="flex overflow-x-auto">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            productName={product.productName}
            brand={product.brand}
            price={product.price}
            quantity={product.quantity}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductRow;
