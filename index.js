const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Ec_inventory_management..!')
})

app.listen(port, () => {
  console.log(`127.0.0.1:${port}`)
})