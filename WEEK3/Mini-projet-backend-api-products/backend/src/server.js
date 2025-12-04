const express = require("express");
const helmet = require("helmet");
const productRoutes = require("./routes/products.routes");

const app = express();

app.use(helmet());
app.use(express.json());
app.use("/api", productRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
