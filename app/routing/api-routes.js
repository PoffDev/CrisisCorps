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


	app.post('/newMember', function (req, res){
		orm.Users(req.body.userName, req.body.emailAddress, req.body.password, req.body.userType);
		res.send(function() {
			console.log(req.body);
			alert("User added successfully!");
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
		orm.getNumbers(bloodType, function(result){
			var numbers = result;
			console.log('numbers are', numbers)
			for (var i = numbers.length - 1; i >= 0; i--) {
				twilio(numbers[i].contactNum, process.env.twilNumber, textBody);
			}
		});
	});
}
