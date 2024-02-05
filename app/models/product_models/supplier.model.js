const { default: mongoose, Schema } = require("mongoose");
const userModel = require("./user.model");

module.exports = mongoose.model("supplier", 
mongoose.Schema({
    name :{
        type : String,
        require : true,
    },
    email :{
        type:String,
        require : true,
    },
    number:{
        type:String,
        require: true,
    },
    creator:{
        type: Schema.Types.ObjectId,
        require : true,
        ref : "userModel"
    },
    address:{
        type: String
    },
    discription:{
        type: String
    }
},
{
    timestamps: true,
}))