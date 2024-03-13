const { default: mongoose, Schema } = require("mongoose");

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
            ref: "categories"
        },
        brand: {
            type: [Schema.Types.ObjectId],
            require: true,
            ref: "brand"
        },
        creator: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "users"
        },
        discount: {
            // type: Schema.Types.ObjectId,
            // require: true,
            // ref: "diccountModel"
            type: Number,
            default: 0,
        },
        
        stokes: {
            // type: Schema.Types.ObjectId,
            // require: true,
            // ref: "stokeModel"
            type: Number,
            default: 0,
        },
        varient: {
            // type: Schema.Types.ObjectId,
            // require: true,
            // ref: "varientModel"
            type: String,
        },
        supplier: {
            type: Schema.Types.ObjectId,
            ref: "supplier"
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