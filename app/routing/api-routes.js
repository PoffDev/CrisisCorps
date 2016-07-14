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
		orm.AvailableTasks(req.body.description, req.body.contactName, req.body.contactNumber, req.body.Address, req.body.TaskTime, req.body.membersNeeded);
		res.send(function() {
			alert("Task Created successfully!");
		});
	});


	app.post('/newMember', function (req, res){
		orm.AvailableTasks(req.body.memberName, req.body.emailAddress, req.body.contactNumber, req.body.twitterHandle, req.body.bloodType);
		res.send(function() {
			alert("User added successfully!");
		});
	})

	app.post('/newCorpMember', function (req, res){
		orm.AvailableTasks(req.body.description, req.body.contactName, req.body.contactNumber, req.body.Address, req.body.TaskTime, req.body.membersNeeded);
		res.send(function() {
			alert("Corporate Member Added successfully!");
		})
	});
}
