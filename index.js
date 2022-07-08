const express = require("express");
const connection = require("./connection");
const productRoute = require("./routers/products");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use("/product", productRoute);

module.exports = app;