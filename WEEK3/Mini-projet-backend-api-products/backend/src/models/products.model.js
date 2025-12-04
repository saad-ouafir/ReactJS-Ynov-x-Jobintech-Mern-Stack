const connect = require("../config/db");

class ProductModel {
  async getProducts() {
    let [rows] = await connect.query("SELECT * FROM products");
    // const [rows] = connect.query("SELECT * FROM products");
    return rows;
  }

  getProductsByID(id) {}

  updateProduct(id) {}

  createProduct(product) {}

  deleteProduct(id) {}
}

module.exports = ProductModel;
