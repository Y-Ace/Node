const http = require('http')
const fs = require('fs')
const path = require('path')
//载入zlib模块
const zlib = require("zlib");
const app = http.createServer()

app.on('request', (req, res) => {
    //定义mime对象设置相应的响应头类型
    var mime = {
        ".jpeg": "image/jpeg",
        ".jpg": "image/jpg",
        ".png": "image/png",
        ".tiff": "image/tiff",
        ".pdf": "application/pdf",
        ".css": "text/css",
        ".js": "text/javascript",
    };
    var pathName =req.url;
    pathName = decodeURI(pathName) // 防止中文乱码
    //获取文件的扩展名
    var extName = path.extname(pathName);
    var filePath = __dirname + '/txt' + pathName
    if (pathName === '/') {
        filePath = path.join(__dirname, '/txt/index.html')
        res.writeHead(200,{"content-type":"text/html"});
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) return res.end('<h1>404 Not found</h1>')
            res.end(data)
        })
    } else {
        fs.readFile(filePath, function (err, data) {
            if (err) return res.end('<h1>404 Not found</h1>')
            var contentType = mime[extName] || "text/plain";
            if (extName === '.html') {
                res.end(data)
            } else {
                readFile(filePath, contentType);
            }
        })
    }
    //图片文件流式读取
    function readFile(filePath, contentType) {
        //设置http消息头
        res.writeHead(200, { "content-type": contentType, "content-encoding": "gzip" });
        //创建流对象读取文件
        var stream = fs.createReadStream(filePath);
        stream.on("error", function () {
            res.writeHead(500, { "content-type": contentType });
            res.end("<h1>500 服务器错误</h1>");
        });
        // 链式管道操作将文件内容流到客户端
        stream.pipe(zlib.createGzip()).pipe(res);
    }

});

app.listen(8888, () => {
    console.log(`服务器成功开启：http://127.0.0.1:8888`);
})