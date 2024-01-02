const express = require('express')
const server = express()
const port = 5555
const mongoose = require('mongoose')
const { db_url } = require('./configs/db_config')
const allRoute = require('./routes/all.route.js')
const formData = require('express-form-data');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const isAuthMiddelware = require('./app/middelware/isAuth.middelware.js')
const { render } = require('ejs')
const isAdminMiddelware = require('./app/middelware/isAdmin.middelware.js')

server.use(express.static("public"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(formData.parse());
server.use(cookieParser());

server.set('json spaces', 4);
server.set('trust proxy', 1);
server.use(session({
  secret: 's3Cur3',
  name: 'sessionId'
}))
server.set('view engine', 'ejs');
server.set('views', './views')
server.use(express.static("public"))



// server.use((req, res, next) => {
//   console.log("it's ok")
//   isAuthMiddelware(server,req,res,next);
//   isAdminMiddelware(server,req,res,next);
//   next();
// })


server.use(async (req, res, next) => {

  server.locals.error = {};
  server.locals.old = {};
  server.locals.login_error = {};
  server.locals.login_old = {};

  server.locals.isAuth = false;
  server.locals.isAdmin = false;
  server.locals.user = {};

  if (req.session.login_old) {
    server.locals.login_old = req.session.login_old;
    req.session.login_old = {}
    console.log()
  }
  if (req.session.login_error) {
    server.locals.login_error = req.session.login_error;
    req.session.login_error = {}
  }
  if (req.session.error) {
    server.locals.error = req.session.error;
    req.session.error = {};
  }
  if (req.session.old) {
    server.locals.old = req.session.old;
    req.session.old = {};
  }
  if (req.session.isAuth) {
    server.locals.isAuth = req.session.isAuth;
    req.session.isAuth = false;
  }
  if (req.session.isAdmin) {
    server.locals.isAdmin = req.session.isAdmin;
    req.session.isAdmin = false;
  }
  if (req.session.user) {
    server.locals.user = req.session.user;
    req.session.user = {};
  }
  console.log(server.locals)
  next();
})

server.use(allRoute());

server.use((req,res , next)=>{
  console.log("helo2")
  next();
})

// mongoose.connect("mongodb+srv://mozammel:XDV3cNkHABTYeoFS@cluster0.yp55jwf.mongodb.net/blogDB")
// .then(()=>{
//   console.log("db_conneced")
// })


mongoose.connect(db_url)
  .then(() => {
    console.log("db_conneced")
    server.listen(port, () => {
      console.log(`app is listening on http://127.0.0.1:${port}`);
    })
  })

