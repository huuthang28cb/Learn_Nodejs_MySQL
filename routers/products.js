const express = require("express");
//const { query } = require("../connection");
const connection = require("../connection");
const router = express.Router();

// /product/create
router.post('/create', (req, res, next) => {
    let product = req.body;
    // console.log(product)
    query = "insert into product (name, description	, price) value(?,?,?)";
    connection.query(query, [product.name, product.description, product.price], (err, results) => {
        if (!err) {
            return res.status(200).json({ message: "Product Added Successfully!" });
        }
        else {
            return res.status(500).json(err);
        }
    })
})

// /product/read
router.get('/read', (req, res, next) => {
    query = "select * from product";
    connection.query(query, (err, results) => {
        if (!err) {
            return res.status(200).json(results)
        }
        else {
            return res.status(500).json(err)
        }
    })
})

// /product/update/:id
router.patch('/update/:id', (req, res, next) => {
    const id = req.params.id;
    let product = req.body;
    var query = "update product set name=?, description=?, price=? where id=?";
    connection.query(query, [product.name, product.description, product.price, id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Product id is not found!" });
            }
            return res.status(200).json({ message: "Product updated Successfully!" })
        }
        else {
            return res.status(500).json(err)
        }
    })
})

// /product/delete/:id
router.delete('/delete/:id', (req, res, next) => {
    const id = req.params.id;
    var query = "delete from product where id=?";
    connection.query(query, [id], (err, results) => {
        if (!err) {
            if (results.affectedRows == 0) {
                return res.status(404).json({ message: "Product id is not found!" });
            }
            return res.status(200).json({ message: "Product deleted Successfully!" })
        }
        else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;