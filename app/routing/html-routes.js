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
  		//use this to troubleshoot
  		//console.log('first', user);
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
			actionBtn: 'Sign Up',
			message: req.flash('error')[0],
			otherAction: "Sign In"
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
		var user_id = parseInt(req.user.userID);
		
		res.render('crisis', {
			title: 'Crisis Manager',
			link: 'crisis',
			active_crisis: true,
			userID: user_id,
			username: req.user.userName,
		});
	});

	app.get('/signin', function(req, res){
		res.render('signin', {
			title: 'Sign In',
			link: 'dashboard',

		});

		// console.log('sign in succesfull ' + req.user.userName);
	});

	app.get('/signup', function(req, res){
		res.render('signup', {
			title: 'Sign Up',
			link: 'signin',
			welcomeText: "Sign Up",
			actionBtn: 'signup',
			otherAction: "signin"
		});
	});

	app.get('/tasks', function(req, res){
		var user_id = parseInt(req.user.userID);

		orm.allTasks(function(all_tasks) {
			res.render('tasks', {
				username: req.user.userName,
				title: 'Tasks',
				link: 'tasks',
				active_tasks: true,
				tasks: all_tasks,
				userID: user_id,
			});
		});
	});

	app.get('/task/:task_id', function(req, res){
		var task_id = parseInt(req.params.task_id);
		var user_id = parseInt(req.user.userID);

		orm.specificTask(task_id, function(the_task) {
			res.render('task', {
				username: req.user.userName,
				layout: 'subdir',
				title: 'Task',
				link: 'task',
				active_tasks: true,
				task: the_task,
				userID: user_id,
			});
		});
		// if (req.isAuthenticated()) {
		// 	res.render('/task/:task_id', {
		// 		username: req.user.username
		// 	})
		// } else {
		// 	res.redirect('/signin')
		// }
	});
	///:user_id
	app.get('/profile/:user_id', function(req, res){

		console.log('clicked on profile link' );

		var user_id = parseInt(req.user.userID);

		orm.memberProfile(user_id, function(memb) {
			orm.corpProfile(user_id, function(corp) {
				orm.memberTask(user_id, function(task) {

					if (req.isAuthenticated()){

						console.log('dynamic profile working, userID = ' + user_id)

						res.render('profile', {
						username: req.user.userName,
						layout: 'subdir',
						title: "Profile",
						link: 'profile',
						active_profile: true,
						member: memb,
						corporation: corp,
	 					userID: user_id,
	 					task: task
	 					});
					}else{
						console.log('fith place');
						res.redirect('/signin')
					}
				});
  			});
  		});
  	});
  
  	app.get('/dashboard', function(req, res){
  		var user_id = parseInt(req.user.userID);
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
										console.log(req.user.userID);
									res.render('dashboard', {
										username: req.user.userName,
										title: 'Dashboard',
										link: 'dashboard',
										active_dashboard: true,
										vols: num_vols,
										vols_volun: vols_volunteered,
										membs: total_membs,
										vol_pos: vol_positions,
										completed_tasks: comp_tasks,
										total_tasks: tot_tasks,
										db_tasks: tasks_three,
										userID: req.user.userID
									});
								};
							});
						});
					});
				});
			})
		});		
	});
});

	app.get('/corp', function(req, res){
		// get all corporate users
		orm.allCorpUsers(function(all_corps) {

			
			if (req.isAuthenticated()) {
				res.render('corp', {
				title: 'Corporation List', // breadcrumbs title
				link: 'corp', // link to pass to breadcrumbs
				active_crisis: true, // active class to display on admin nav
				corp_list: all_corps, // mysql data to pass to handlebars page
				userID: req.user.userID,
				username: req.user.userName
			})
			} else {
				res.redirect('/signin')
			}
		});
	});

	app.get('/logout', function(req, res){
	  req.logout();
	  res.redirect('/');
	});


	// =============== POSTS ================= //

	app.post('/signin', passport.authenticate('local',{failureRedirect:'/', failureFlash:'Wrong Username or Password'}), function(req, res){
		
		res.redirect('/dashboard');
		console.log("post /sign: " + req.user.userName);
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
		// res.sendFile(path.join(__dirname '/../public/home.html'));
		res.render('404', {
			title: 'CrisisCorps Not Found',
			link: '404'
		});
	});
}
