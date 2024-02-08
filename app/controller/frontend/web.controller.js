
var jwt = require('jsonwebtoken');

const controller ={
    navDinamic: async function(req,res){
       const response ={};
        const token = req.cookies?.atoken;
         if(token){
            let user = await jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InNhZ2lyIiwiZW1haWwiOiJzYWdpckBnbWFpbC5jb20iLCJfaWQiOiI2NWMzNGQ3MTFmMTE0ZjJmNWIyNjE2YjUiLCJyb2xlIjoic2VsbGVyIiwicGhvdG9fdXJsIjoiIiwiZGV2aWNlX2lkIjoiIiwiZ2VucmF0ZV90aW1lIjoiIiwiaWF0IjoxNzA3MzMyNDEwfQ.SCxg1uRusomRsJFhYPwu51m_H08cQkpWG8J__gDQpJY", '6fd286f7-708a-429b-b53a-2bc5272e0db6');
            response.user = user ;
            return res.json(response);
         }else{
            response.user = {};
            return res.json(response);
         }

    },
}

module.exports = controller;