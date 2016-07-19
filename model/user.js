var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../config/orm.js');

function User; (Users) {
	this.userName = userObj.username
	this.password = userObj.password
}
 //check these names//
module.exports = user

module.exports.saveUser = function(Users, callback){
	orm.addUserToDB(Users, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}