const express = require("express");
const router = express.Router();
const ProductModel = require("../models/products.model");

router.get("/products", async (req, res) => {
  try {
    const productModel = new ProductModel();
    const products = await productModel.getProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/products/:id", (req, res) => {
  res.send("product");
});

router.post("/products", (req, res) => {
  res.send("create product");
});

router.put("/products/:id", (req, res) => {
  res.send("update product");
});

router.delete("/products/:id", (req, res) => {
  res.send("delete product");
});

module.exports = router;
