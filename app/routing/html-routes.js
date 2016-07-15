var path = require('path');

module.exports = function (app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/crisis', function(req, res){
		res.render('crisis');
	});

	app.get('/profile', function(req, res){
		res.render('profile');
	});

	app.get('/signin', function(req, res){
		res.render('signin');
	});

	app.get('/signup', function(req, res){
		res.render('signup');
	});

	app.get('/tasks', function(req, res){
		res.render('tasks');
	});

	app.get('/dashboard', function(req, res){
		res.render('dashboard');
	});

	app.get('/corp', function(req, res){
		res.render('corp');
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		// res.sendFile(path.join(__dirname + '/../public/home.html'));
		res.render('home');
	});

}