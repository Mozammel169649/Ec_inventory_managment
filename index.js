const express = require('express')
const server = express()
const port = 3000
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


// server.use(async (req, res, next) => {
// })

server.use(allRoute());

mongoose.connect(db_url)
  .then(() => {
    console.log("db_conneced")
    server.listen(port, () => {
      console.log(`app is listening on http://127.0.0.1:${port}`);
    })
  })

