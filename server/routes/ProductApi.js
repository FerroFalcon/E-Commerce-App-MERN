import { Router } from "express";
import Product from "../models/Products.js";

const router = Router();

router.get("/", async (req, res) => {
  const product = await Product.find({});
  res.json({ data: product });
});

router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  const productById = await Product.findById(_id);
  res.status(201).send(productById);
});

router.post("/", async (req, res) => {
  const response = req.body;
  const productsdata = new Product(response);
  await productsdata.save();
  res.json({ message: "success" });
});

export default router;
