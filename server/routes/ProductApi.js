import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();

router.get("/", async (req, res) => {
  const product = await Product.find({});
  console.log(product);
  res.json({ data: product });
});

export default router;
