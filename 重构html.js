const fs = require('fs')
const path = require('path')
// 设置样式正则表达式
const ergCss = /<style>[\s\S]*<\/style>/
// 设置js正则表达式
const ergJs = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname + '/banner.html'), 'utf8', (err, data) => {
    if (err) return console.log('读取文件失败！');
    writerCss(data)
    writerJs(data)
    writerHtml(data)
})

// 写入css文件
function writerCss (data) {
    const ergData = ergCss.exec(data)
    const cssData = ergData[0].replace('<style>', '').replace('</style>', '')    
    fs.writeFile(path.join(__dirname, './txt/index.css'), cssData, (err, data) => {
        if (err) return console.log('写入Css文件失败！');
        console.log('写入Css文件成功！'); 
    })
}
// 写入js文件
function writerJs (data) {
    const ergData = ergJs.exec(data)
    const JsData = ergData[0].replace('<script>', '').replace('</script>', '')    
    fs.writeFile(path.join(__dirname, './txt/index.js'), JsData, (err, data) => {
        if (err) return console.log('写入Js文件失败！');
        console.log('写入Js文件成功！'); 
    })
}
// 重写html文件
function writerHtml (data) {
    const HtmlData = data.replace(ergCss.exec(data), '<link rel="stylesheet" href="./index.css">')
    .replace(ergJs.exec(data), '<script src="./index.js"></script>')    
    fs.writeFile(path.join(__dirname, './txt/index.html'), HtmlData, (err, data) => {
        if (err) return console.log('重写html文件失败！');
        console.log('重写html文件成功！'); 
    })
}