
var jwt = require('jsonwebtoken');

const controller ={
    navDinamic: async function(req,res){
       const response ={};
        const token = req.cookies?.atoken;
      //   console.log("token :" ,token);
         if(token){
            let user = await jwt.verify(token, '6fd286f7-708a-429b-b53a-2bc5272e0db6');
            // console.log(user);
            response.user = user ;
            return res.json(response);
         }else{
            response.user = {};
            return res.json(response);
         }

    },
}

module.exports = controller;