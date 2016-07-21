var connection = require('./connection.js');

// object relational mapper (ORM)

//
function connectToDB(){
    connection.connect(function(err){
        if (err) {
            console.error('error connection:', err.stack);
            return
        }
        console.log('connected to MySQL DB')
    });
}
module.exports.connectToDB = connectToDB;
  
var orm = {
    //form data entry queries
    Users: function(userName, emailAddress, password, userType) {
        var queryString = 'INSERT INTO users (userName, emailAddress, password, userType) VALUES (?, ?, ?, ?)';
        var vals = [userName, emailAddress, password, userType];
         connection.query(queryString, vals, function(err, result) {
                if (err) return callback(false, err);
                callback(true. null);
                console.log(result);
            });
        },
        //Why is user id being pushed here? 


    findUser: function (userName, callback){
        console.log('find user function, username is: ' + userName)
    connection.query('SELECT * FROM Users WHERE ?', {emailAddress: userName}, function(err, user){
        callback(err, user)
        })
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

    //Form Update Queries

    //should user id be at the beginning or end here?
    updateMembers: function(userId, contactNumber, bloodType) {
        var queryString = 'UPDATE users SET contactNumber = ?, bloodType = ?, WHERE id = ?,' [req.params.id, req.body.contactNumber, req.body.bloodType],
        function(err, result){
            if(err) throw err;
            res.redirect('/');
        };
    },

    updateCorporate: function(companyName, contactNum, donationDesc, userId){ 
    var queryString = ' UPDATE corporateMembers SET companyName = ?, contactNum = ?, donationDesc = ?, WHERE id = ?,' [req.body.companyName, req.body.contactNum, req.body.donationDesc, req.params.id];

        function(err, result) {
                if (err) throw err;
                console.log(result);
        };
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
        var queryString = 'SELECT taskTitle, taskDescript, volsRemaining, taskId ';
        queryString += 'FROM availableTasks ';
        queryString += 'ORDER BY volsRemaining DESC;';

        this.connectionQuery(queryString, callback);

    },

    specificTask: function(task_id, callback) {

        var queryString = 'SELECT taskId, taskTitle, taskDescript, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip ';
        queryString += 'FROM availableTasks ';
        queryString += 'WHERE taskId = ' + task_id + ';';

        this.connectionQuery(queryString, callback);

    },

    memberProfile: function(user_id, callback) {
        
        var queryString = 'SELECT users.userType, users.userName, users.emailAddress, members.contactNum, members.bloodType ';
        queryString += 'FROM users ';
        queryString += 'LEFT JOIN members ';
        queryString += 'ON users.userID = members.userID WHERE users.userId = ' + user_id + ' AND users.userType = 2 '
        queryString += 'ORDER By users.username;';

        this.connectionQuery(queryString, callback);

    },

    corpProfile: function(user_id, callback) {
        
        var queryString = 'SELECT users.userType, corporateMembers.companyName, users.userName, users.emailAddress, users.password, corporateMembers.contactNum, corporateMembers.donationDesc ';
        queryString += 'FROM corporateMembers ';
        queryString += 'LEFT JOIN users ';
        queryString += 'ON users.userID = corporateMembers.userID WHERE users.userID = ' + user_id + ' AND users.userType = 3 '
        queryString += 'ORDER By users.username;';

        this.connectionQuery(queryString, callback);

    },

    getCrisisDetails: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT * ';
        queryString += 'FROM activecrisis;';

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