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


} //<-- Delete this when we add routing





	//User database routing
	// 	var UserModel = require('../models/User.js');
	// //pulls info from current user

	// var passport = require('passport');
	// var LocalStrategy = require('passport-local').Strategy;
	// var orm = require('../database/orm.js');

	// //Setting the strategy for Passport
	// passport.use(new LocalStrategy({passReqToCallback : true},
	//   function(req, username, password, done) {

	//   	//Searching the ORM for the user in the database
	//   	orm.findUser(username, function(err, user){
	//   		user = user[0];
	//   		if (err) { return done(err); }
	//       if (!user) { return done(null, false); }

	//       //comparing user passwords - return if not a match
	//       if (password !== user.password) { return done(null, false);}

	//       return done(null, user);
	//   	});
	//   }
	// ));

	// //These two methods are required to keep the user logged in via the session
	// passport.serializeUser(function(user, done) {
	//   done(null, user);
	// });

	// passport.deserializeUser(function(user, done) {
	//   done(null, user);
	// });


	// module.exports = function(app){

	// 	app.get('/', function(req, res){
	// 		res.render('index', {					//This info compiles the buttons and Messages
	// 			welcomeText: "Sign In",
	// 			actionBtn: 'signin',
	// 			message: req.flash('error')[0],		//diplays error based on flash
	// 			otherAction: "Signup"
	// 		});
	// 	});

	// 	app.get('/signin', function(req, res){
	// 		res.redirect('/')
	// 	});

	// 	app.get('/signup', function(req, res){
	// 		res.render('index', {
	// 			welcomeText: "Sign Up",
	// 			actionBtn: 'signup',
	// 			otherAction: "Signin"
	// 		});
	// 	});

	// 	app.get('/auth', function(req,res){
	// 		if (req.isAuthenticated()) {
	// 			res.render('auth', {
	// 				username: req.user.username
	// 			})
	// 		} else {
	// 			res.redirect('/')
	// 		}
	// 	});

	// 	app.get('/logout', function(req, res){
	// 	  req.logout();
	// 	  res.redirect('/');
	// 	});

	// 	app.post('/signin', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong Username or Password'}), function(req, res){
	// 		res.redirect('/auth');
	// 	});

	// 	app.post('/signup', function(req, res){
	// 		var user = new UserModel(req.body);
	// 		UserModel.saveUser(user, function(status){
	// 			if(!status) {
	// 				res.redirect('/signup')
	// 				return false
	// 			}
	// 			res.redirect('/');
	// 		});
	// 	});


	// } <-- Don't forget about me

//}