const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {res.json({product: newProduct})})
        .catch(err => {res.status(400).json({message: "Something went wrong", error: err})})
};

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {res.json({products: allProducts})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};

module.exports.findSingleProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(singleProduct => {res.json({product: singleProduct})})
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
    .then(updatedProduct => {res.json({product: updatedProduct})})
    .catch(err => {res.status(400).json({message: "Something went wrong", error: err})})
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({_id: req.params.id})
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => {res.json({message: "Something went wrong", error: err})})
};