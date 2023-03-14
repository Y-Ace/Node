var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1');
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var questions = {
	"status": 200,
	"msg": "ok",
	"result": {
		"num": "10",
		"list": [{
				price: 20,
				title: '宫保鸡丁',
				shop: 'XXX博主',
				image: 'http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg',
			},
			{
				price: 10,
				title: '粤菜经典之白切贵妃鸡你太美',
				shop: 'XXX博主',
				image: 'http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg',
			},
			{
				price: 10,
				title: '粤菜经典之白切贵妃鸡你太美',
				shop: 'XXX博主',
				image: 'http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg',
			},
			{
				price: 10,
				title: '粤菜经典之白切贵妃鸡你太美',
				shop: 'XXX博主',
				image: 'http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg',
			},
			{
				price: 10,
				title: '粤菜经典之白切贵妃鸡你太美',
				shop: 'XXX博主',
				image: 'http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg',
			},
			{
				price: 15,
				title: '菜脯西芹肉末',
				shop: 'XXX博主',
				image: 'http://api.jisuapi.com/recipe/upload/20160719/115138_46688.jpg',
			},
		]
	}
}


//写个接口123
app.get('/123', function(req, res) {
	res.status(200),
		res.json(questions)
});
app.post('/post', function(req, res) {
	res.status(200),
	res.json(questions)
});

//配置服务端口
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
})
