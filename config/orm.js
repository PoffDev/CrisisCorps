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
    var queryString = 'INSERT INTO corporateMembers (companyName, contactNum, donationDesc) VALUES (?, ?)';
    var vals = [companyName, contactNum, donationDesc];

         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    //admin panel task

    AvailableTasks: function(taskName, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip){ 
    var queryString = 'INSERT INTO AvailableTasks (taskName, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var vals = [taskName, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip];

            connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    //     var queryString = 'SELECT ' + tableOneCol + ', COUNT(' + tableOneCol + ') AS count FROM ' + tableOne + ' LEFT JOIN ' + tableTwo + ' ON ' + tableTwo + '.' + tableTwoForeignKey + '= ' + tableOne + '.id GROUP BY ' + tableOneCol + ' ORDER BY count desc LIMIT 1';
    //     connection.query(queryString, function(err, result) {
    //         console.log(result);
    //     });
    // }
};

module.exports = orm;