var connection = require('./connection.js');

// object relational mapper (ORM)


var orm = {
    //form data entry queries
    members: function(UserName, Password, MemberName, EmailAddress, ContactNum, TwitterHandle, BloodType) {
        var queryString = 'INSERT INTO members (MemberName, EmailAddress, ContactNum, TwitterHandle, BloodType) VALUES (?, ?, ?, ?, ?)';
        var vals = [UserName, Password, MemberName, EmailAddress, ContactNum, TwitterHandle, BloodType];
         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    corporateMembers: function(UserName, Password, CompanyName, ContactName, EmailAddress, ContactNum, DonationDesc){ 
    var queryString = 'INSERT INTO corporateMembers (CompanyName, ContactName, EmailAddress, ContactNum, DonationDesc) VALUES (?, ?, ?, ?, ?)';
    var vals = [UserName, Password, CompanyName, ContactName, EmailAddress, ContactNum, DonationDesc];

         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    //admin panel task

    AvailableTasks: function(TaskDescript, ContactName, ContactNum, TaskAddress, TaskTime, VolunteersNeeded){ 
    var queryString = 'INSERT INTO AvailableTasks (TaskDescript, ContactName, ContactNum, TaskAddress, TaskTime, VolunteersNeeded) VALUES (?, ?, ?, ?, ?, ?)';
    var vals = [TaskDescript, ContactName, ContactNum, TaskAddress, TaskTime, VolunteersNeeded];

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