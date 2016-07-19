//Required Node Modules
//handlebars
var express = require('express');
var exphbs = require('express-handlebars');
//login
var flash = require('connect-flash');
var passport = require('passport');
var session = require('express-session');
//sessions
var path = require('path');
var bodyParser = require('body-parser');

//check this if not working...
var orm = require('./config/orm.js')	

//Port
var app = express();
var PORT = process.env.PORT || 8000;
// var orm = require('./config/orm.js');

// BodyParser
// allows our server to interpret data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// access to the public folder
app.use(express.static('app/public'));

//session is used to keep the user logged in 
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

//flash is used to show a message on an incorrect login
app.use(flash());

//passport middleware methods
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


// BodyParser
// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

//check these if they do not work.
// orm.connectToDB();

//Listener
app.listen(PORT, function(){
	console.log("App is listening on port: " + PORT)
});