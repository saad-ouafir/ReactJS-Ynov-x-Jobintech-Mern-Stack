const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/product.controller");
const {
  validateProductCreation,
  validateProductUpdate,
  validateProductId,
} = require("../middleware/validation");

// GET /api/products - Get all products with pagination and filtering
router.get("/products", ProductController.getProducts);

// GET /api/products/:id - Get a single product by ID
router.get(
  "/products/:id",
  validateProductId,
  ProductController.getProductById
);

// POST /api/products - Create a new product
router.post(
  "/products",
  validateProductCreation,
  ProductController.createProduct
);

// PUT /api/products/:id - Update a product
router.put(
  "/products/:id",
  validateProductId,
  validateProductUpdate,
  ProductController.updateProduct
);

// DELETE /api/products/:id - Delete a product
router.delete(
  "/products/:id",
  validateProductId,
  ProductController.deleteProduct
);

module.exports = router;
