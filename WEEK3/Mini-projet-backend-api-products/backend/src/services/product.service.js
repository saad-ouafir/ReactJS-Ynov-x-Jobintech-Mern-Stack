const Product = require("../models/products.model.js");

class ProductService {
  // Find all products
  static async findProducts() {
    return await Product.findAll();
  }

  // Find product by ID
  static async findById(id) {
    return await Product.findByPk(id);
  }

  // Create new product
  static async create(productData) {
    return await Product.create(productData);
  }

  // Update product
  static async update(id, updateData) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Product not found");
    }

    await product.update(updateData);
    return product;
  }

  // Delete product
  static async delete(id) {
    const product = await Product.findByPk(id);
    if (!product) {
      throw new Error("Product not found");
    }

    await product.destroy();
    return true;
  }
}

module.exports = ProductService;
