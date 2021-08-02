const axios = require('axios')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const url = "http://192.168.155.78:30431/"

app.get('/', (req, res) => {
    // const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // res.send(ipAddr)
    console.log('/로부터 get요청이 들어왔습니다.')

    function axiosTest() {
        // create a promise for the axios request
        const promise = axios.get(url)
    
        // using .then, create a new promise which extracts the data
        const dataPromise = promise.then((res) => res.data)
    
        // return it
        return dataPromise
    }
    
    // now we can use that data from the outside!
    axiosTest()
        .then(data => {
            res.json({ message: 'Request received!', data })
        })
        .catch(err => res.json(err))
})

app.get('/post', (req, res) => {
    // const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // res.send(ipAddr)
    console.log('/로부터 post요청이 들어왔습니다.')

    function axiosTest() {
        // create a promise for the axios request
        const promise = axios.post(url, {test: 'test'})
    
        // using .then, create a new promise which extracts the data
        const dataPromise = promise.then((res) => res.data)
    
        // return it
        return dataPromise
    }
    
    // now we can use that data from the outside!
    axiosTest()
        .then(data => {
            res.json({ message: 'Request received!', data })
        })
        .catch(err => res.json(err))
})

app.use(morgan('common'))

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })