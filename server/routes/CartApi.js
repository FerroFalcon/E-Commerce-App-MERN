import { Router } from "express";
import Cart from "../models/Cart.js";

const router = Router();

router.get("/", async (req, res) => {
  const cart = await Cart.find({});
  console.log(cart);
  res.json({ data: cart });
});

router.post("/", async (req, res) => {
  const response = req.body;
  const cartdata = new Cart(response);
  await cartdata.save();
  res.json({ message: "success" });
});

export default router;
