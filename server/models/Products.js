import mongoose, { Schema } from "mongoose";

const { schema } = mongoose;

const productSchema = new Schema({
  productName: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: String, required: true },
  image: { type: String, required: true },
});

export default new mongoose.model("Product", productSchema);
