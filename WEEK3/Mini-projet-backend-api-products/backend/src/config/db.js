const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "products",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("products", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = { connection, sequelize };
