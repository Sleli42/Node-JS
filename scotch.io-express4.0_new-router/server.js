// SETUP ====================
var express = require('express');
var app = express();
var port = process.env.PORT || 2121;
var router = express.Router();

// ROUTE ====================
	// route middleware
router.use(function(req, res, next) {
	//log each request to the console
	console.log(req.method, req.url);
	next();
})

router.get('/hello/:name', function(req, res) {
	res.send('Hello ' + req.params.name + ' !');
})

app.get('/', function(req, res) {
	res.send('-- Home Page');
})

app.get('/about', function(req, res) {
	res.send('-- About Page');
})

app.get('/sample', function(req, res) {
	res.send('This is a sample');
});

app.use('/', router);

app.listen(port, function() {
	console.log('Server running on port: ' + port);
})
