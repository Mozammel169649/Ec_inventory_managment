const express = require('express')
const server = express()
const port = 4000


server.set('view engine', 'ejs');
server.set('views', './views')
server.use(express.static("public"))


server.get('/', (req, res) => {
  res.send('Ec_inventory_management..!')
})

server.listen(port, () => {
  console.log(`127.0.0.1:${port}`)
})