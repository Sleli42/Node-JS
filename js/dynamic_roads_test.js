var express = require('express');
var ejs = require('ejs');
var app = express();
/*
app.get('/home/:nb/test', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('test num: ' + req.params.nb);
})
*/
//			TEST WITH TEMPLATE
app.get('/home/:num/test', function(req, res) {
	res.render('dynamic_roads_template.ejs', {number: req.params.num});
})

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.send(404, 'Page not found\n');
})

.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
})