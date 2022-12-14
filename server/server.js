import express from "express";
import connection from "./database/mongodb.js";
import cors from "cors";
import bodyParser from "body-parser";
import ProductApi from "./routes/ProductApi.js";
import CartApi from "./routes/CartApi.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// app.use("/user", UserApi);
app.use("/product", ProductApi);
app.use("/cart", CartApi);
// app.use("/order", OrderApi);

await connection();

app.listen(PORT, () => {
  console.log("server is running at http://localhost:4000");
});
