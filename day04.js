const express = require('express')
const router = require('./router')
const cors = require('cors')

const app = express()

app.use(express.json()).use(express.urlencoded({ extended: false })).use(cors())
// app.use(express.urlencoded({ extended: false }))

app.get('/test', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.use('/api', router)

app.listen(8080, () => {
    console.log('listening: http://127.0.0.1:8080');
})