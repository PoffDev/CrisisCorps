//Required Node Modules
	//handlebars
	var express = require('express');
	var exphbs = require('express-handlebars');
	//sessions
	var path = require('path');
	var bodyParser = require('body-parser');
	

//Port
var app = express();
var PORT = process.env.PORT || 8000;


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
require('./app/routing/html-routes.js')(app);



//Listener
app.listen(PORT, function(){
	console.log("App is listening on port: " + PORT)
});