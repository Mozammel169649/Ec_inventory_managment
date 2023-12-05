const { default: mongoose, Schema } = require("mongoose");
const categoryModel = require("./category.model");
const brandModel = require("./brand.model");
const userModel = require("./user.model");
const productVarientModel = require("./productVarient.model");

module.exports = mongoose.model("product",
    mongoose.Schema({
        title: {
            type: String,
            require: true
        },
        product_number: {
            type: String,
            require: true
        },
        categories: {
            type: [Schema.Types.ObjectId],
            require: true,
            ref: "categoryModel"
        },
        brand: {
            type: [Schema.Types.ObjectId],
            require: true,
            ref: "brandModel"
        },
        creator: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "userModel"
        },
        discount: {
            type: Number,
            default: 0,
        },
        stokes: {
            type: Number,
            default: 0,
        },
        varient: {
            type: String,
        },
        price: {
            type: String,
            require: true
        },
        short_discription: {
            type: String,
            require: true
        },
        discription: {
            type: String,
            require: true
        },
        seo_title: {
            type: String,
        },
        status: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        image: {
            type: String,
            require: true,
        },
        related_images: {
            type: [String],
        },
        taqs: {
            type: [String]
        },
    }, {
        timestamps: true,
    }))