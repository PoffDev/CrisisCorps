var path = require('path');

module.exports = function (app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------


	app.get('/', function(req, res){
		res.render('home', {
			title: 'Home',
			link: 'home'
		});
	});

	app.get('/home', function(req, res){
		res.render('home', {
			title: 'Home',
			link: 'home'
		});
	});

	app.get('/crisis', function(req, res){
		res.render('crisis', {
			title: 'Crisis Manager',
			link: 'crisis'
		});
	});

	app.get('/profile', function(req, res){
		res.render('profile', {
			title: 'Profile',
			link: 'profile'
		});
	});

	app.get('/signin', function(req, res){
		res.render('signin', {
			title: 'Sign In',
			link: 'signin'
		});
	});

	app.get('/signup', function(req, res){
		res.render('signup', {
			title: 'Sign Up',
			link: 'signup'
		});
	});

	app.get('/tasks', function(req, res){
		res.render('tasks', {
			title: 'Tasks List',
			link: 'tasks'
		});
	});

	app.get('/task', function(req, res){
		res.render('task', {
			title: 'Task',
			link: 'task'
		});
	});

	app.get('/dashboard', function(req, res){
		res.render('dashboard', {
			title: 'Dashboard',
			link: 'dashboard'
		});
	});

	app.get('/corp', function(req, res){
		res.render('corp', {
			title: 'Corporation List',
			link: 'corp'
		});
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		// res.sendFile(path.join(__dirname + '/../public/home.html'));
		res.render('404', {
			title: 'CrisisCorps Not Found',
			link: '404'
		});
	});

}