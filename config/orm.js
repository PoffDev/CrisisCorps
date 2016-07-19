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

    AvailableTasks: function(taskName, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip){ 
    var queryString = 'INSERT INTO AvailableTasks (taskName, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var vals = [taskName, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip];

            connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },


/*********************************************************************************************
**********************************************************************************************
****************************************  GET Requests ***************************************
**********************************************************************************************
*********************************************************************************************/

    allCorpUsers: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT corporateMembers.companyName, users.userName, users.emailAddress, corporateMembers.contactNum, corporateMembers.donationDesc ';
        queryString += 'FROM corporateMembers ';
        queryString += 'LEFT JOIN users ';
        queryString += 'ON users.userID=corporateMembers.userID ';
        queryString += 'ORDER By corporateMembers.companyName;';

        this.connectionQuery(queryString, callback);

    },

    numVolsNeeded: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT SUM(volsRemaining) ';
        queryString += 'FROM availableTasks;';

        this.connectionQuery(queryString, callback);

    },

    numVolsWhoHaveVolunteered: function(callback) {

        // build the mysql query string
        var queryString = 'SELECT SUM(volsNeeded - volsRemaining) ';
        queryString += 'FROM availableTasks;';

        this.connectionQuery(queryString, callback);

    },

    totalNumMembers: function(callback) {
        
         // build the mysql query string
        var queryString = 'SELECT COUNT(*) ';
        queryString += 'FROM members;';

        this.connectionQuery(queryString, callback);

    },

    totalVolPositions: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT SUM(volsNeeded) ';
        queryString += 'FROM availableTasks;';

        this.connectionQuery(queryString, callback);

    },

    totalCompletedTasks: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT SUM(volsNeeded = 0) ';
        queryString += 'FROM availableTasks;';

        this.connectionQuery(queryString, callback);

    },

    totalTasks: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT COUNT(*) ';
        queryString += 'FROM availableTasks;';

        this.connectionQuery(queryString, callback);

    },

    dashboardTasksList: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT taskTitle, taskDescript, volsRemaining ';
        queryString += 'FROM availableTasks ';
        queryString += 'ORDER BY volsRemaining DESC ';
        queryString += 'LIMIT 3;';

        this.connectionQuery(queryString, callback);

    },

    allTasks: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT taskTitle, taskDescript, volsRemaining ';
        queryString += 'FROM availableTasks ';
        queryString += 'ORDER BY volsRemaining DESC;';

        this.connectionQuery(queryString, callback);

    },

    connectionQuery: function(queryString, callback) {
        
        // call connection.query, pass the query string and get the callback to send to html-routes.js
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        }); // end connection.query()

    }

};

module.exports = orm;