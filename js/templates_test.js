var express = require('express');
var app = express();

app.get('/colors/:random', function(req, res) {
	var colors = ['Blue', 'Red', 'Yellow', 'Pink', 'Green', 'Brown'];
	res.render('templates_colors.ejs', {count: req.params.random, colors: colors});
})

.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
})