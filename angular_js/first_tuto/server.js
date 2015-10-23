var	express = require('express');
var	app = express();

app.get('/angular/directives', function(req, res) {
	res.render('angular_directives.ejs');
})

app.get('/angular/array', function(req, res) {
	res.render('angular_array.ejs');
})

app.get('/angular/app', function(req, res) {
	res.render('angular_app.ejs');
})

app.get('/angular/filters', function(req, res) {
	res.render('angular_filters.ejs');
})

.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
	console.log('Run: http://127.0.0.1/angular/urpage');
})