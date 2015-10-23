// setup =======================

var express = require('express');
var app = express();							// create our app express
var mongoose = require('mongoose');				// mongoose for mongodb
var morgan = require('morgan');					// log request to the console (express4)
var bodyParser = require('body-parser');		// pull information from HTML POST
var methodOverride = require('method-override');// simulate DELETE ans PUT

// configuration ================

mongoose.connect('mongodb://node:nodeuser@mongo.onmodulus.net:27017/uwO3mypu'); // connect to mongoDB on modulus.io
app.use(express.static(__dirname + '/public')); // set the static files location
app.use(morgan('dev'));							// log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse app/x-www-...
app.use(bodyParser.json());						// parse app/json
app.use(bodyParser.json({Type: 'application/vnd.api+json'})); // par app/vnd.api+json as json
app.use(methodOverride());

// define model =================

var Todo = mongoose.model('Todo', {
	text : String
});

// routes = ======================

app.get('/api/todos', function(req, res) {
	// use mongoose to get all todos in the database
	Todo.find(function(err, todos) {
		// if there is an error retrieving, send the error. nothing after res.send(err) will execute
		if (err)
			res.send(err);
		res.json(todos); // return all todos in JSON format
	});
});

// create todo and send back all todos after creation
app.post('/api/todos', function(req, res) {
	// create a todo, information comes form AJAX request form Angular
	Todo.create({
		text : req.body.text,
		done : false
	}, function(err, todo) {
		if (err)
			res.send(err);
		// get and return all the todos after you creat another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err);
			res.json(todos);
		});
	});
});

// delete a todo
app.delete('/api/todos/:todo_id', function(req, res) {
	Todo.remove({
		_id : req.params.todo_id
	}, function(err, todo) {
		if (err)
			res.send(err);
		// get and return all the todos after you create another
		Todo.find(function(err, todos) {
			if (err)
				res.send(err);
			res.json(todos);
		});
	});
});

// index.html route
app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
})

// listen =======================

app.listen(2121, function() {
	console.log('Server running on: 127.0.0.1:2121');
	console.log('Run: http://127.0.0.1:2121/');
})
