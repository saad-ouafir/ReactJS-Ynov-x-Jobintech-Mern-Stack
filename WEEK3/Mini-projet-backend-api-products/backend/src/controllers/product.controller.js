const ProductService = require("../services/product.service");

class ProductController {
  // Get all products
  static async getProducts(req, res) {
    try {
      const products = await ProductService.findProducts();
      res.json(products);
    } catch (error) {
      console.error("Error fetching products:", error);
      res.status(500).json({ error: "Failed to fetch products" });
    }
  }

  // Get a single product by ID
  static async getProductById(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductService.findById(id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      console.error("Error fetching product:", error);
      res.status(500).json({ error: "Failed to fetch product" });
    }
  }

  // Create a new product
  static async createProduct(req, res) {
    try {
      const product = await ProductService.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error("Error creating product:", error);
      if (error.name === "SequelizeValidationError") {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message).join(", ") });
      }
      res.status(500).json({ error: "Failed to create product" });
    }
  }

  // Update a product
  static async updateProduct(req, res) {
    try {
      const { id } = req.params;

      const product = await ProductService.update(id, req.body);
      res.json(product);
    } catch (error) {
      console.error("Error updating product:", error);
      if (error.message === "Product not found") {
        return res.status(404).json({ error: "Product not found" });
      }
      if (error.name === "SequelizeValidationError") {
        return res
          .status(400)
          .json({ error: error.errors.map((e) => e.message).join(", ") });
      }
      res.status(500).json({ error: "Failed to update product" });
    }
  }

  // Delete a product
  static async deleteProduct(req, res) {
    try {
      const { id } = req.params;

      await ProductService.delete(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Error deleting product:", error);
      if (error.message === "Product not found") {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(500).json({ error: "Failed to delete product" });
    }
  }
}

module.exports = ProductController;
