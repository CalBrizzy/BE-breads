const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

const breadsController = require('./controllers/breads_controllers')

app.get ('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('listening on PORT: ', PORT)
})