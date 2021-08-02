const axios = require('axios')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const port = 7070
const url = "192.168.155.78:30431/"

app.get('/', (req, res) => {
    // const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    // res.send(ipAddr)

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

app.use(morgan('common'))

app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })