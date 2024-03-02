const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model("brand",
        mongoose.Schema({
            title: {
                type: String,
                require: true,
            },
            creator: {
                type: Schema.Types.ObjectId,
                require: true,
                ref: "users",
            },
            status: {
                type: Boolean,
                default: false,
            }
        },{
            timestamps: true,
        })
    )