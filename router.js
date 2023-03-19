const express = require('express')
const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
})
const router = express.Router()

router.get('/user/list', (req, res) => {
    // const query = req.query
    const sqlStr = 'select * from user'
    db.query(sqlStr, (err, results) => {
        if (err) return console.log(err.message);
        res.send({
            status: 200,
            msg: '成功请求get',
            data: results
        })
    })
})

router.post('/user/list', (req, res) => {
    const body = req.body
    res.send({
        status: 200,
        msg: '成功请求get',
        data: body
    })
})

module.exports = router