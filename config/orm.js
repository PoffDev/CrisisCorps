var connection = require('./connection.js');

// object relational mapper (ORM)


var orm = {
    //form data entry queries
    Users: function(userName, emailAddress, password, userType) {
        var queryString = 'INSERT INTO users (userName, emailAddress, password, userType) VALUES (?, ?, ?, ?)';
        var vals = [userName, emailAddress, password, userType];
         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },
    members: function(userId, contactNumber, bloodType) {
        var queryString = 'INSERT INTO users (userId, contactNumber, bloodType) VALUES(?, ?, ?)';
        var vals = [userId, bloodType];
        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            console.log(result);
        });
    },

    corporateMembers: function(companyName, contactNum, donationDesc){ 
    var queryString = 'INSERT INTO corporateMembers (companyName, contactNum, donationDesc) VALUES (?, ?, ?)';
    var vals = [companyName, contactNum, donationDesc];

         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    //admin panel task

    AvailableTasks: function(taskTitle, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip){ 
    var queryString = 'INSERT INTO AvailableTasks (taskTitle, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var vals = [taskTitle, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip];

            connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },
};

module.exports = orm;