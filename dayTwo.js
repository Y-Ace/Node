// Buffer二进制
// const buf = new Buffer.from('Y2hlbg==')
// console.log(buf.toString('hex'));
// const fs = require('fs')

// const read = fs.createReadStream('te2st.txt')
// read.on('data', (thunk) => {
// 	console.log(thunk.toString());
// })
// read.on('error',(e) => {
// 	console.log(e.stack);
// })
// console.log(read);
const hello = require('./exports')
hello('这是d')