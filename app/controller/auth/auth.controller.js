const userModel = require("../../models/product_models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const controller = {
    signUp: async function (req, res) {
        const { userName, email, password, password_confirmation } = req.body;

        let responce = {};

        if (!userName || !email || !password || !password_confirmation) {
            if (!userName) {
                responce.userName = "User Name is required"
            }
            if (!email) {
                responce.email = "Email is required"
            }
            if (!password) {
                responce.password = "Passworde is required"
            }
            if (!password_confirmation) {
                responce.password_confirmation = "Password_confirmation is required"
            }
            return res.json(responce);
        }

        const isMatch = await userModel.findOne().where({ email: email })
        if (isMatch) {
            responce.email = "This Email is already accessed"
            return res.json(responce);
        }

        if (password != password_confirmation) {
            responce.password_confirmation = "password does not matched"
            return res.json(responce);
        }
        const Data = new userModel({
            userName: userName,
            email: email,
            password: await bcrypt.hash(password, 12)
        });
        await Data.save();

        const userData = await userModel.findOne().where({ email: email })
        // console.log("userdata", userData);
        if (userData) {
            // console.log(req.session)
            let data = {
                userName: userData.userName,
                email: userData.email,
                _id: userData._id,
                role: userData.role
            };

            const token = await jwt.sign(data, '6fd286f7-708a-429b-b53a-2bc5272e0db6');
            res.cookie('atoken', token)
        }

        responce.success = "Success signUp a new User"
        return res.json(responce);
    },

    login: async function (req, res) {
        const { email, password } = req.body;
        let responce = {};
        if (!email || !password) {
            if (!email) {
                responce.email = "Email is required!"
            }
            if (!password) {
                responce.password = "password is required!"
            }
            return res.json(responce);
        }

        let user = await userModel.where({ email: email }).findOne();
        if (user) {
            let passMatch = await bcrypt.compare(password, user.password);
            if (passMatch) {
                let data = { 
                    userName: user.userName,
                    email: user.email,
                    _id: user._id,
                    role:user.role
                };

                const token = await jwt.sign(data, '6fd286f7-708a-429b-b53a-2bc5272e0db6');
                res.cookie('atoken', token)

                responce.success = "User login success";
                responce.userRole = user.role;
                return res.json(responce);
            } else {
                responce.password = "Incurrect password !"
                return res.json(responce);
            }

        } else {
            responce.email = "Incurrect Email !"
            return res.json(responce);
        }
    },

    logOut: async function (req, res) {
        res.cookie("atoken", "");
        return res.json("logout");
    }

};
module.exports = controller;