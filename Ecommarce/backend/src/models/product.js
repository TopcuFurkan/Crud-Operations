const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    "productName":String,
    "brand":String,
    "stock":Number,
    "categoryId":String,
    "unitPrice":Number
});

module.exports = mongoose.model("Products",ProductSchema);