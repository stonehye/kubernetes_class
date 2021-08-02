const axios = require('axios')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = 7070

// app.use(morgan('common'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(req)
    // console.log(ipAddr)
    res.send(ipAddr)
})

app.post('/', (req, res) => {
    const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ipAddr)
    res.json({ipAddr: ipAddr})
})

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })