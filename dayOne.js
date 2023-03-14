// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
// const http = require('http')
// const fs = require('fs')
// var data = fs.readFileSync('test.txt');
// fs.readFile('test.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log(data.toString());
// console.log("程序执行结束!");
// const serve = http.createServer((req, res) => {
// 	// res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('dayOne');
// })
// serve.listen(3000,()=>{
// 	console.log('run');
// })
// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
 
// 创建事件处理程序
var connectHandler = function connected() {
   console.log('连接成功。');
  
   // 触发 data_received 事件 
   eventEmitter.emit('data_received');
}
 
// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});
 
// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);
 
// 触发 connection 事件 
eventEmitter.emit('connection');
 
console.log("程序执行完毕。");
