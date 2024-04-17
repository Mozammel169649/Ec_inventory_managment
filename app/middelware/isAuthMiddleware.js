
var jwt = require('jsonwebtoken');
const userModel = require('../models/product_models/user.model');


const isAuth = async (req, res, next) => {
    var { atoken } = req.cookies;
   
    if (atoken) {
        try {
            let auth_info = await jwt.verify(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6');
            const userRole = await userModel.findOne({ _id: auth_info._id });
            if (userRole && (userRole.role === 'admin' || userRole.role === 'manager' || userRole.role === 'seller')) {
                return next();
            } else {
                return res.redirect('/');
            }
        } catch (error) {
            console.log("Error:", error);
            return res.redirect('/#login');
        }
    } else {
        return res.redirect('/#login');
    }
};

module.exports = () => isAuth;