const express = require('express')
const server = express()
const port = 4001
const mongoose = require('mongoose')
const { db_url } = require('./configs/db_config')

server.set('view engine', 'ejs');
server.set('views', './views')
server.use(express.static("public"))


server.get('/', (req, res) => {
  res.render('home')
})

// mongoose.connect("mongodb+srv://mozammel:XDV3cNkHABTYeoFS@cluster0.yp55jwf.mongodb.net/blogDB")
// .then(()=>{
//   console.log("db_conneced")
// })


mongoose.connect(db_url)
  .then(() => {
    console.log("db_conneced")
        server.listen(port, () => {
          console.log(`127.0.0.1:${port}`)
        })
  })

