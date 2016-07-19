var path = require('path');
var orm = require('../../config/orm.js');
var UserModel = require('../../model/user.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../../config/orm.js');

//Setting the strategy for Passport
passport.use(new LocalStrategy({passReqToCallback : true},
  function(req, userName, password, done) {
  	//Searching the ORM for the user in the database
  	orm.findUser(userName, function(err, user){
  		console.log('first',user);
  		user = user[0];
  		
  		if (err) { return done(err); }
  		
      if (!user) { return done(null, false); }
      

      //comparing user passwords - return if not a match
      if (password !== user.password) { return done(null, false);}
		
      return done(null, user);
  	});
  }
));

//These two methods are required to keep the user logged in via the session
passport.serializeUser(function(Users, done) {
  done(null, Users);
});

passport.deserializeUser(function(Users, done) {
  done(null, Users);
});

module.exports = function (app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------


	app.get('/', function(req, res){
		res.render('home', {
			title: 'Home',
			link: 'home',
			welcomeText: "Sign In",
			actionBtn: 'signin',
			message: req.flash('error')[0],
			otherAction: "Signup"
			});
	});

	app.get('/home', function(req, res){
		orm.getCrisisDetails(function(crisis_details) {
			res.render('home', {
				title: 'Home',
				link: 'home',
				crisis: crisis_details
			});
		});
	});

	app.get('/crisis', function(req, res){
		res.render('crisis', {
			title: 'Crisis Manager',
			link: 'crisis',
			active_crisis: true
		});
	});

	app.get('/signin', function(req, res){
		res.render('signin', {
			title: 'Sign In',
			link: 'dashboard'
		});
	});

	app.get('/signup', function(req, res){
		res.render('signup', {
			title: 'Sign Up',
			link: 'signup',
			welcomeText: "Sign Up",
			actionBtn: 'signup',
			otherAction: "signin"
		});
	});

	app.get('/tasks', function(req, res){
		orm.allTasks(function(all_tasks) {
			res.render('tasks', {
				title: 'Tasks',
				link: 'tasks',
				active_tasks: true,
				tasks: all_tasks
			});
		});
	});

	app.get('/task/:task_id', function(req, res){
		var task_id = parseInt(req.params.task_id);
		orm.specificTask(task_id, function(the_task) {
			res.render('task', {
				layout: 'subdir',
				title: 'Task',
				link: 'task',
				active_tasks: true,
				task: the_task
			});
		});
		if (req.isAuthenticated()) {
			res.render('/task/:task_id', {
				username: req.user.username
			})
		} else {
			res.redirect('/signin')
		}
	});

	app.get('/profile/:user_id', function(req, res){
		var user_id = parseInt(req.params.user_id);
		orm.memberProfile(user_id, function(memb) {
			orm.corpProfile(user_id, function(corp) {
				res.render('profile', {
					layout: 'subdir',
					title: 'Profile',
					link: 'profile',
					active_profile: true,
					member: memb,
					corporation: corp
				});
			});

			console.log('hello');
		});
		if (req.isAuthenticated()) {
			res.render('/profile/:user_id', {
				username: req.user.username
			})
		} else {
			res.redirect('/signin')
		}
	});

	app.get('/dashboard', function(req, res){
		// if (req.isAuthenticated()) {
		// 	res.render('dashboard', {


		// 		// username: req.user.username
		// 	})
		// } else {
		// 	res.redirect('/signin')
		// }
		// get number of volunteers still needed
		orm.numVolsNeeded(function(num_vols) {
			orm.numVolsWhoHaveVolunteered(function(vols_volunteered) {
				orm.totalNumMembers(function(total_membs) {
					orm.totalVolPositions(function(vol_positions) {
						orm.totalCompletedTasks(function(comp_tasks) {
							orm.totalTasks(function(tot_tasks) {
								orm.dashboardTasksList(function(tasks_three) {
									if (req.isAuthenticated()) {
									res.render('dashboard', {
										username: req.user.username,
										title: 'dashboard',
										link: 'dashboard',
										active_dashboard: true,
										vols: num_vols,
										vols_volun: vols_volunteered,
										membs: total_membs,
										vol_pos: vol_positions,
										completed_tasks: comp_tasks,
										total_tasks: tot_tasks,
										db_tasks: tasks_three
									});
								};
							});
						});
					});
				});
			});
		})		
	});
});

	app.get('/corp', function(req, res){
		// get all corporate users
		orm.allCorpUsers(function(all_corps) {

			res.render('corp', {
				title: 'Corporation List', // breadcrumbs title
				link: 'corp', // link to pass to breadcrumbs
				active_crisis: true, // active class to display on admin nav
				corp_list: all_corps, // mysql data to pass to handlebars page

			});
			if (req.isAuthenticated()) {
			res.render('/corp', {
				username: req.user.username
			})
			} else {
				res.redirect('/signin')
			}
		});
	});


	// =============== POSTS ================= //

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong Username or Password'}), function(req, res){
		res.redirect('/dashboard');
		console.log("hello: " + req.user);
	});

	app.post('/signup', function(req, res){
		var user = new UserModel(req.body);
		UserModel.saveUser(Users, function(status){
			if(!status) {
				res.redirect('/signin')
				return false
			}
			res.redirect('/dashboard');
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


