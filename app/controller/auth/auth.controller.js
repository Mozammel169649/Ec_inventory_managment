const userModel = require("../../models/product_models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const controller = {
    signUp: async function (req, res) {
        const { userName, email, password, password_confirmation } = req.body;
        // console.log("router ok");
        let error = {};
        req.session.old = req.body;

        if (!userName || !email || !password || !password_confirmation) {
            if (!userName) {
                error.userName = "User Name is required"
            }
            if (!email) {
                error.email = "Email is required"
            }
            if (!password) {
                error.password = "Passworde is required"
            }
            if (!password_confirmation) {
                error.password_confirmation = "Password_confirmation is required"
            }
            return res.json(error);
        }

        const isMatch = await userModel.findOne().where({ email: email })
        if (isMatch) {
            error.email = "This Email is already accessed"
            return res.json(error);
        }

        if (password != password_confirmation) {
            error.password_confirmation = "password does not matched"
            return res.json(error);
        }
        const Data = new userModel({
            userName: userName,
            email: email,
            password: await bcrypt.hash(password, 12)
        });
        // console.log("userModel ok");
        await Data.save();

        const userData = await userModel.findOne().where({ email: email })
        // console.log("userdata", userData);
        if (userData) {
            req.session.isAuth = true;
            req.session.user = userData;
            // console.log(req.session)
            let data = {
                userName: userData.userName,
                email: userData.email,
                _id: userData._id,
                role: userData.role,
                photo_url: '',
                device_id: '',
                genrate_time: '',
            };

            const token = await jwt.sign(data, '6fd286f7-708a-429b-b53a-2bc5272e0db6');
            res.cookie('atoken', token)
        }

        let prev_url = req.session.prev_auth_url;
        if (prev_url) {
            delete req.session.prev_auth_url;
            if (prev_url != '/favicon.ico' || prev_url != '/login') {
                console.log("prev url", prev_url);
                // return res.redirect(prev_url);
            }
        }
        // console.log(req.session)
        return res.redirect("/");
    },

    login: async function (req, res) {
        const { email, password } = req.body;
        let error = {};
        req.session.login_old = req.body;

        if (!email || !password) {
            if (!email) {
                error.email = "Email is required!"
            }
            if (!password) {
                error.password = "password is required!"
            }
            return res.json(error);
        }

        let user = await userModel.where({ email: email }).findOne();
        console.log("USER", user)
        if (user) {
            let passMatch = await bcrypt.compare(password, user.password);
            if (passMatch) {
                req.session.isAuth = true;
                req.session.user = user;
                console.log(req.session)
                let data = {
                    userName: user.userName,
                    email: user.email,
                    _id: user._id,
                    role: user.role,
                    photo_url: '',
                    device_id: '',
                    genrate_time: '',
                };

                const token = await jwt.sign(data, '6fd286f7-708a-429b-b53a-2bc5272e0db6');
                res.cookie('atoken', token)

                let prev_url = req.session.prev_auth_url;
                if (prev_url) {
                    delete req.session.prev_auth_url;
                    if (prev_url != '/favicon.ico' || prev_url != '/login') {
                        return res.cookie('atoken', token).redirect(prev_url);
                    }
                }

                // set role + dashboard route.
                return res.redirect('/dashboard/admin');
            } else {
                error.password = "Incurrect password !"
                return res.json(error);
            }

        } else {
            error.email = "Incurrect Email !"
            return res.json(error);
        }
    },


};
module.exports = controller;