import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 5000;

connectDB(); // Connect to mongodb

const app = express();

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
