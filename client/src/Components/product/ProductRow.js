import products from "../../Products.js";
import ProductCard from "./ProductCard.js";
function ProductRow() {
  return (
    <div>
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
  );
}

export default ProductRow;
