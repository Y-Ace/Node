const fs = require('fs')
// __dirname解决路径拼接问题，__dirname表示当前项目目录的路径
// + 拼接符可以使用path.join()方法进行替换
fs.readFile(__dirname + '/txt/test.txt', 'utf8', function (err, data) {
    if (err) return console.log('读取文件失败！' + err.message)
    var newText = data.replace(/=/g, ':').replace(/ /g, '\r\n')
    fs.writeFile(__dirname + '/txt/重新整理.txt', newText, function(err, data) {
        if (err) return console.log('写入文件失败！' + err.message);
        console.log(data);
    })
})
