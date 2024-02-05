const { default: mongoose } = require("mongoose");

module.exports = mongoose.model("user_roles",
    mongoose.Schema(
        {
           role:{
            type:String,
            require:true
           }
        },
        {
            timestamp: true
        }
    ))