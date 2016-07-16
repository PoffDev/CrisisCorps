var path = require('path');

module.exports = function (app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/crisis', function(req, res){
		res.render('crisis', {title: 'Crisis Manager'});
	});

	app.get('/profile', function(req, res){
		res.render('profile', {title: 'Profile'});
	});

	app.get('/signin', function(req, res){
		res.render('signin', {title: 'Sign In'});
	});

	app.get('/signup', function(req, res){
		res.render('signup', {title: 'Sign Up'});
	});

	app.get('/tasks', function(req, res){
		res.render('tasks', {title: 'Tasks List'});
	});

	app.get('/task', function(req, res){
		res.render('task', {title: 'Task'});
	});

	app.get('/dashboard', function(req, res){
		res.render('dashboard', {title: 'Dashboard'});
	});

	app.get('/corp', function(req, res){
		res.render('corp', {title: 'Corporation List'});
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		// res.sendFile(path.join(__dirname + '/../public/home.html'));
		res.render('home', {title: 'Home'});
	});

}