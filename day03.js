const express = require('express')

const app = express()
// 错了错误级别的中间件放在所有路由最后，其他的中间件都要放在路由之前，多个中间件用,隔开，也可以使用数组形式
const jubu = (req, res, next) => {
    console.log('这是一个局部中间件');
    next()
}
// 使用express.json()解析表单json格式的数据
app.use(express.json())
// 使用express.urlencoded()解析表单urlencoded格式的数据
app.use(express.urlencoded({ extended: false }))

// app.use(express.json()).use(express.urlencoded({ extended: false }))

app.get('/test', jubu, (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.get('/err', jubu, (req, res) => {
    throw new Error('服务器内部发生错误！')
    res.send('err')
})

// 捕捉项目的异常错误，防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('Err:' + err.message);
    res.send(err.message)
})

app.listen(8080, () => {
    console.log('开启web成功： http://127.0.0.1:8080');
})

/* // 自定义中间件
const express = require('express')
const { mybody } = require('./yuan/index')
const app = express()

app.use(mybody)

app.get('/test', (req, res) => {
    console.log(req.body);
    res.send(req.body)
})

app.listen(8080, () => {
    console.log('开启web成功： http://127.0.0.1:8080');
}) */