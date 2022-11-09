import mongoose, { Schema } from "mongoose";

const { schema } = mongoose;

const productSchema = new Schema({
  product: String,
  brand: String,
  category: String,
  price: Number,
  quantity: String,
  image: String,
});

export default new mongoose.model("Product", productSchema);
