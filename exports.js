function hello(d) {
	// function helloworld() {
		var data = d
		console.log('这个是hello方法,参数为:'+d);
		wrold()
	// }
	// var name; 
	//     this.setName = function(thyName) { 
	//         name = thyName; 
	//     }; 
	//     this.sayHello = function() { 
	//         console.log('Hello ' + name); 
	//     };
}
function wrold() {
	console.log('这个是wrold方法');
}
module.exports = hello;
// module.exports = world;