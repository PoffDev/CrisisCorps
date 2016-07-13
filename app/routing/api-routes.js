//data we need to serve via ajax.

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
		console.log(req.body);
	})
};