var	express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Roads.  --RACINE\n');
})

.get('/home', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Roads.  --HOME\n');
})

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.send(404, 'Page not found\n');
})

.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
})