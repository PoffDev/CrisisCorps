//data we need to serve via ajax.
var orm = require('../../config/orm.js');
var hospitalArray = require('../data/resources.js');
var bloodArray = require('../data/blood.js');
var twilio = require('../../config/twilio.js')

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
		orm.AvailableTasks(req.body.taskTitle, req.body.taskDescript, req.body.volsNeeded, req.body.volsRemaining, req.body.contactName, req.body.contactNum, req.body.taskAddress, req.body.taskAddress2, req.body.taskCity, req.body.taskState, req.body.taskZip);
		res.send(function() {
			alert("Task Created successfully!");
		});
	});


	app.post('/newUser', function (req, res){
		orm.Users(req.body.userName, req.body.emailAddress, req.body.password, req.body.userType, function(success, userId){
			console.log('here', success)
			if (req.body.userType == 2) {
				console.log("ID to be inserted " + userId);
				orm.members(userId, req.body.contactNum, req.body.bloodType);
			} else if (req.body.userType == 3) {
				orm.corporateMembers(userId, req.body.companyName, req.body.contactNum, req.body.donationDesc);
			} else {
				throw err;
			}
			res.send(function() {
			// orm.member()
			console.log(req.body);
			alert("User added successfully!");
		});
		});
	});

	app.post('/updateMember', function (req, res){
		orm.updateUsers(req.body.userName, req.body.emailAddress, req.body.password, req.body.userID);
		console.log("updateUsers fired")
		orm.updateMembers(req.body.userID, req.body.contactNum, req.body.bloodType);
			console.log("updateMembers fired");
		res.send(function() {
			console.log(req.body);
			alert("Profile updated successfully!");
		});
	});


	app.post('/newCrisis', function (req, res){
		orm.ActiveCrisis(req.body.crisisName, req.body.crisisDesc);
		res.send(function() {
			console.log(req.body);
			alert("Crisis created successfully!");
		});
	});

	app.post('/newCorpMember', function (req, res){
		orm.corporateMember(req.body.companyName, req.body.contactNum, req.body.donationDesc);
		res.send(function() {
			alert("Corporate Member Added successfully!");
		})
	});

	app.post('/textMembers', function (req, res){
		var textBody = req.body.body;
		orm.getNumbers(function(result){
			var numbers = result;
			console.log('numbers are', numbers)
			for (var i = numbers.length - 1; i >= 0; i--) {
				twilio(numbers[i].contactNum, process.env.twilNumber, textBody);
			}
		});
	});

	app.post('/textMembersBlood', function (req, res){
		var textBody = req.body.body;
		var bloodType = req.body.bloodType;
		orm.getNumbersBlood(bloodType, function(result){
			var numbers = result;
			console.log('numbers are', numbers)
			console.log('blood type', bloodType)
			for (var i = numbers.length - 1; i >= 0; i--) {
				twilio(numbers[i].contactNum, process.env.twilNumber, textBody);
			}
		});
	});

	app.post('/volForTask', function(req, res) {
		// var taskid = req.body.taskId;
		// var volid = req.body.volId;
		orm.volunteerForTask(req.body.taskId, req.body.volId);
		// console.log('task id: ' + taskid + ' / vol id: ' + volid);
		res.send(function() {
			alert("Remaining vols for task and task added to user successfully!");
		});
	});

	app.post('/membTaskUpdate', function(req, res) {
		// var taskid = req.body.taskId;
		// var volid = req.body.volId;
		orm.membTaskUpate(req.body.taskId, req.body.volId);
		// console.log('task id: ' + taskid + ' / vol id: ' + volid);
		res.send(function() {
			alert("Remaining vols for task and task added to user successfully!");
		});
	});
}
