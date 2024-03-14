const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model("product_stoke",
    mongoose.Schema({
        product_code: {
            type: String,
            require: true,
        },
        stock: {
            type: Number,
            require: true,
        },
        creator: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "users"
        },
        supplier: {
            type: Schema.Types.ObjectId,
            require: true,
            ref: "supplier"
        },

    }, {
        timestamps: true,
    }))