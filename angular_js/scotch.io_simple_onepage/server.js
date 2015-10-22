// setup =======================
var express = require('express');
var app = express();

// configuration ================
app.use(express.static(__dirname + '/public'));
// routes = ======================

// routes ========================
//app.get('/', function(req, res) {
//	res.sendfile('./public/index.html');
//})
app.get('/', function(req, res) {
	res.render('index.html')
})

// listen =======================
app.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
	console.log('Run: http://127.0.0.1:2121/');
})
