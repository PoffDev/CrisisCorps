//Required Node Modules
	//handlebars
	//express
	//express-handlebars
	//sessions
	//path
	//body-parser
	

//Port
var PORT = process.env.PORT || 8000;

//Listener
app.listen(PORT, function(){
	console.log("App is listening on port: " + PORT)
});