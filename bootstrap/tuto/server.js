var	express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/picture', function(req, res) {
	res.render('tuto_bootstrap.ejs');
})

.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
	console.log('Run: http://127.0.0.1/picture');
})                   