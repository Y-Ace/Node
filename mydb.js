const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'test'
})

/* const sqlStr = 'select * from user'

db.query(sqlStr, (err, results) => {
    if (err) return console.log(err.message);
    console.log(results);
}) */

// 插入数据库
/* const user = { 'username': '校园', 'password': 'aabbcc' }
const insert = 'insert into user (username, password) values (?, ?)'
db.query(insert, [user.username, user.password], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('插入数据成功！');
    }
}) */

/* 插入数据简写
const user = { 'username': '校园', 'password': 'aabbcc' }
const insert = 'insert into user set ?'
db.query(insert, user, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('插入数据成功！');
    }
}) */

// 更新用户信息
/* const user = { 'Id': 10, 'username': '小圆', 'password': '000' }
const update = 'update  user set username=?, password=? where Id=?'
db.query(update, [user.username, user.password, user.Id], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('更新数据成功');
    }
}) */

// 更新用户信息简写
/* const user = { 'Id': 10, 'username': '小源', 'password': '111' }
const update = 'update  user set ? where Id=?'
db.query(update, [user, user.Id], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('更新数据成功');
    }
}) */

// 删除用户数据
// const _delete = 'delete from user where Id=?'
// db.query(_delete, 4, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('删除数据成功！');
//     }
// })

// 为了防止误删可以改为update一个statue来表示用户删除 => 标记删除
const update = 'update  user set status=0 where Id=?'
db.query(update, 7, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('删除数据成功！');
    }
})