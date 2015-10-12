var	http = require('http');
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello Lucazy\n');
})
.listen(2121);

console.log('Run http://127.0.0.1:2121');