const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        minLength: [2, "Product name must be more than 2 characters"]
    },
    price: {
        type: Number,
        required: [ true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [8, "Description must be more than 8 charcters"]
    }},
    {timestamps: true}
    );

    module.exports = mongoose.model("Product", ProductSchema);