var express = require('express');
var morgan = require('morgan');
var favicon = require('serve-favicon');

var app = express();

app.use(morgan('combined'))
.use(express.static(__dirname + '/public'))
.use(function(req, res) {
	res.send('Hello');
})

.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
})