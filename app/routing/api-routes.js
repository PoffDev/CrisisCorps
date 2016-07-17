//data we need to serve via ajax.
var orm = require('../../config/orm.js');
var hospitalArray = require('../data/resources.js');
var bloodArray = require('../data/blood.js');

//actually routing

module.exports = function(app){

	app.get('/resources', function(req, res){

		res.json(hospitalArray);
		res.json(bloodArray);
	})

	app.post('/resources', function (req, res){

		hospitalArray.push(req.body);
		bloodArray.push(req.body);
	})

	app.post('/newTask', function (req, res){
		orm.AvailableTasks(req.body.taskName, req.body.taskDescript, req.body.volsNeeded, req.body.volsRemaining, req.body.contactName, req.body.contactNum, req.body.taskAddress, req.body.taskAddress2, req.body.taskCity, req.body.taskState, req.body.taskZip);
		res.send(function() {
			alert("Task Created successfully!");
		});
	});


	app.post('/newMember', function (req, res){
		orm.Users(req.body.userName, req.body.emailAddress, req.body.password, req.body.userType);
		res.send(function() {
			alert("User added successfully!");
		});
	});

	app.post('/newCorpMember', function (req, res){
		orm.corporateMember(req.body.companyName, req.body.contactNum, req.body.donationDesc);
		res.send(function() {
			alert("Corporate Member Added successfully!");
		})
	});
}
