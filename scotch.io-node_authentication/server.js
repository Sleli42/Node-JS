// SET UP 		=============================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

// configuration =============================
mongoose.connect(configDB.url);
// require('./config/passport')(passport);

app.use(morgan('dev'));		// log every request to the console
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'ejs'); // set up ejs for templating

// require for passport
app.use(session({ secret: 'littlesecret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes 		===============================
require('./app/routes.js')(app, passport);

// launch		===============================
app.listen(8080, function() {
	console.log('Server running on port : 2121');
});
