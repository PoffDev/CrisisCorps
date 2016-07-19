var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var orm = require('../config/orm.js');

function Users (Users) {
	this.userName = userObj.userName
	this.password = userObj.password
}
 //check these names//
module.exports = Users

module.exports.saveUser = function(Users, callback){
	orm.addUserToDB(Users, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}