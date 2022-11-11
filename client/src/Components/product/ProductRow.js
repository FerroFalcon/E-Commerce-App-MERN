// import products from "../../Products.js";
import ProductCard from "./ProductCard.js";
function ProductRow({ products }) {
  return (
    <div className="product_row flex overflow-x-scroll overflow-y-hidden">
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
