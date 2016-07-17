var connection = require('./connection.js');

// object relational mapper (ORM)


var orm = {
    //form data entry queries
    members: function(userName, emailAddress, password, contactNum, userType) {
        var queryString = 'INSERT INTO Users (userName, emailAddress, password, contactNum, userType) VALUES (?, ?, ?, ?, ?)';
        var vals = [userName, emailAddress, password, contactNum, userType];
         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    corporateMembers: function(companyName, donationDesc){ 
    var queryString = 'INSERT INTO corporateMembers (companyName, DonationDesc) VALUES (?, ?)';
    var vals = [companyName, donationDesc];

         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    //admin panel task

    AvailableTasks: function(taskTitle, taskDesc, volsNeeded, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip){ 
    var queryString = 'INSERT INTO AvailableTasks (taskTitle, taskDesc, volsNeeded, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var vals = [taskTitle, taskDesc, volsNeeded, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip];

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