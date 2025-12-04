const ProductModel = require("../models/products.model");
class ProductController {
  getProducts(req, res) {
    const productModel = new ProductModel();
    const products = productModel.getProducts();
    res.send(JSON.stringify(products));
    res.send("Hello");
  }

  getProductsByID(req, res) {}

  updateProduct(req, res) {}

  createProduct(req, res) {}

  deleteProduct(req, res) {}
}

module.exports = ProductController;
