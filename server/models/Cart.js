import mongoose, { Schema } from "mongoose";

const { schema } = mongoose;

const cartSchema = new Schema(
  {
    product: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    unit: { type: Number, default: 1 },
  },
  { timestamps: true }
);

export default new mongoose.model("Cart", cartSchema);
