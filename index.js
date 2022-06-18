const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

const products = require("./src/products/products.json");

app.use(cors());

app.get("/products", (req, res) => {
  return res.json(products);
});

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
