const yuan = require('./yuan/index')

let dt = new Date();
console.log(yuan.dateFormat(dt));

console.log('-------------------');
let str = yuan.htmlEscape('<h1>你好<span>你也好</span>&nbsp;</h1>');
console.log(str);
console.log('-------------------');
let str1 = yuan.htmlUnescape(str);
console.log(str1);

const express = require('express')
const router = require('./router')
const app = express()

app.use(express.static('./txt'))

// 全局挂载中间件
app.use((req, res, next) => {
    req.text = 'cs'
    console.log('简单的中间件' + req.text);
    // 中间件必须调用next函数才能执行下一个中间件或路由
    next()
})
// app.get('/user', (req, res) => {
//     res.send({name:'yuan',age: 25})
// })

// app.post('/user/:id', (req, res) => {
//     res.send(req.params)
// })
app.use(router)

app.listen(8080,() => {
    console.log('开启web成功： http://127.0.0.1:8080');
})