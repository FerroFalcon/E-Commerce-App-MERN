import { Router } from "express";
import Product from "../models/Products.js";

const router = Router();

router.get("/", async (req, res) => {
  const product = await Product.find({});
  console.log(product);
  res.json({ data: product });
});

router.post("/", async (req, res) => {
  const response = req.body;
  const productsdata = new Product(response);
  await productsdata.save();
  res.json({ message: "success" });
});

export default router;
