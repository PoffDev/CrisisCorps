var path = require('path');
var orm = require('../../config/orm.js');

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
			link: 'crisis',
			active_crisis: true
		});
	});

	app.get('/profile', function(req, res){
		res.render('profile', {
			title: 'Profile',
			link: 'profile',
			active_profile: true
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
			console.log(the_task);
			res.render('task', {
				layout: 'subdir',
				title: 'Task',
				link: 'task',
				active_tasks: true,
				task: the_task
			});
		});
	});

	app.get('/dashboard', function(req, res){
		// get number of volunteers still needed
		orm.numVolsNeeded(function(num_vols) {
			orm.numVolsWhoHaveVolunteered(function(vols_volunteered) {
				orm.totalNumMembers(function(total_membs) {
					orm.totalVolPositions(function(vol_positions) {
						orm.totalCompletedTasks(function(comp_tasks) {
							orm.totalTasks(function(tot_tasks) {
								orm.dashboardTasksList(function(tasks_three) {
									res.render('dashboard', {
										title: 'Dashboard',
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
								});
							});
						});
					});
				});
			});
		});

		
	});

	app.get('/corp', function(req, res){
		// get all corporate users
		orm.allCorpUsers(function(all_corps) {
			res.render('corp', {
				title: 'Corporation List', // breadcrumbs title
				link: 'corp', // link to pass to breadcrumbs
				active_crisis: true, // active class to display on admin nav
				corp_list: all_corps // mysql data to pass to handlebars page
			});
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