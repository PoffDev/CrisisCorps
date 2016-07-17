// //add mysql.sql file to this foldervar passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var orm = require('../database/orm.js');


// //pulls info from database as user info
// function User (userObj) {
// 	this.username = userObj.username
// 	this.password = userObj.password
// }


// //exports user object
// module.exports = User


// //saves current user to database
// module.exports.saveUser = function(userObj, callback){
// 	orm.addUserToDB(userObj, function(status, err){
// 		if (err) return callback(false);
// 		callback(true);
// 	});
// }