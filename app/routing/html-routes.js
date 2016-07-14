var path = require('path');

module.exports = function (app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/about', function(req, res){
		res.render('about');
	});

	app.get('/admin', function(req, res){
		res.render('admin');
	});

	app.get('/admincreate', function(req, res){
		res.render('admincreate');
	});

	app.get('/crisis', function(req, res){
		res.render('crisis');
	});

	app.get('/friends', function(req, res){
		res.render('friends');
	});

	app.get('/profile', function(req, res){
		res.render('profile');
	});

	app.get('/resources', function(req, res){
		res.render('resources');
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

	// If no matching route is found default to home
	app.use(function(req, res){
		// res.sendFile(path.join(__dirname + '/../public/home.html'));
		res.render('home');
	});

}