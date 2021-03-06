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
    Users: function(userName, emailAddress, password, userType, callback) {
        var queryString = 'INSERT INTO Users (userName, emailAddress, password, userType) VALUES (?, ?, ?, ?)';
        var vals = [userName, emailAddress, password, userType];
        connection.query(queryString, vals, function(err, result) {
            if (err) return callback(false, err);
                console.log(err);
                console.log(result.insertId);
                callback(true, result.insertId);
                console.log(result);
            });
          },

    findUser: function (userName, callback){
        console.log('find user function, username is: ' + userName)
    connection.query('SELECT * FROM Users WHERE ?', {emailAddress: userName}, function(err, user){
        callback(err, user)
        })
     },

    members: function(userId, contactNum, bloodType) {
        var queryString = 'INSERT INTO members (userId, contactNum, bloodType) VALUES(?, ?, ?)';
        var vals = [userId, contactNum, bloodType];
        connection.query(queryString, vals, function(err, result){
            if(err) throw err;
            console.log(err);
            console.log(result);
        });
    },

    corporateMembers: function(userId, companyName, contactNum, donationDesc){ 
    var queryString = 'INSERT INTO corporateMembers (userId, companyName, contactNum, donationDesc) VALUES (?, ?, ?, ?)';
    var vals = [userId, companyName, contactNum, donationDesc];

         connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },

    //admin panel task

    AvailableTasks: function(taskTitle, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip){ 
    var queryString = 'INSERT INTO availableTasks (taskTitle, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    var vals = [taskTitle, taskDescript, volsNeeded, volsRemaining, contactName, contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip];

            connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(err);
                console.log(result);
            });
        },
    
    ActiveCrisis: function(crisisName, crisisDesc){ 
        var queryString = 'INSERT INTO activeCrisis (crisisName, crisisDesc) VALUES (?, ?)';
        var vals = [crisisName, crisisDesc];

            connection.query(queryString, vals, function(err, result) {
                if (err) throw err;
                console.log(err);
                console.log(result);
            });
        },

    // volunteer for task
    volunteerForTask: function(taskId, volId) {
        
        var queryString = 'UPDATE availableTasks ';
        queryString += 'SET volsRemaining = volsRemaining - 1 ';
        queryString += 'WHERE taskID = ' + taskId + ';';

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });

        var queryString2 = 'UPDATE members ';
        queryString2 += 'SET activeTasks = ? ';
        queryString2 += 'WHERE userID = ?;';

        taskId = taskId.toString();

        var vals = [taskId, volId];

        connection.query(queryString2, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
        });

    },

    // volunteer for task
    membTaskUpate: function(taskId, volId) {

        var queryString2 = 'UPDATE members ';
        queryString2 += 'SET activeTasks = ? ';
        queryString2 += 'WHERE userID = ?;';

        var vals = [taskId, volId];

        connection.query(queryString2, vals, function(err, result) {
            if (err) throw err;
            console.log(result);
        });

    },

        //Profile update forms

    updateUsers: function(userName, emailAddress, password, userId) {             
        connection.query('UPDATE Users SET userName = ?, emailAddress = ?, password = ? WHERE userID = ?',[userName, emailAddress, password, userId], function(err, result) {
           if(err) throw err;
            console.log(result);
        });
    },
  
    updateMembers: function(userId, contactNum, bloodType) {
        connection.query('UPDATE members SET contactNum = ?, bloodType = ? WHERE userID = ?',[contactNum, bloodType, userId], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
  
    updateCorporate: function(companyName, contactNum, donationDesc, userId){ 
        connection.query('UPDATE corporateMembers SET companyName = ?, contactNum = ?, donationDesc = ? WHERE userID = ?,' [companyName, contactNum, donationDesc, userId], function(err, result) {
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
        var queryString = 'SELECT corporateMembers.companyName, Users.userName, Users.emailAddress, corporateMembers.contactNum, corporateMembers.donationDesc ';
        queryString += 'FROM corporateMembers ';
        queryString += 'LEFT JOIN Users ';
        queryString += 'ON Users.userID=corporateMembers.userID ';
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
        var queryString = 'SELECT COUNT(*) ';
        queryString += 'FROM availableTasks ';
        queryString += 'WHERE volsRemaining = 0;';

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
        var queryString = 'SELECT taskId, taskTitle, taskDescript, volsRemaining ';
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

    memberTask: function(user_id, callback) {

        var queryString = 'SELECT taskId, taskTitle, taskDescript, volsRemaining, contactName, availableTasks.contactNum, taskAddress, taskAddress2, taskCity, taskState, taskZip ';
            queryString += 'FROM availableTasks ';
            queryString += 'LEFT JOIN members ';
            queryString += 'ON members.userID = ' + user_id + ' ';
            queryString += 'WHERE availableTasks.taskID = members.activeTasks; ';

        this.connectionQuery(queryString, callback);

    },

    memberProfile: function(user_id, callback) {
        
        var queryString = 'SELECT Users.userType, Users.userName, Users.emailAddress, members.contactNum, members.bloodType ';
        queryString += 'FROM Users ';
        queryString += 'LEFT JOIN members ';
        queryString += 'ON Users.userID = members.userID WHERE Users.userId = ' + user_id + ' AND Users.userType = 2 '
        queryString += 'ORDER By Users.username;';

        this.connectionQuery(queryString, callback);

    },


    corpProfile: function(user_id, callback) {
        
        var queryString = 'SELECT Users.userType, corporateMembers.companyName, Users.userName, Users.emailAddress, Users.password, corporateMembers.contactNum, corporateMembers.donationDesc ';
        queryString += 'FROM corporateMembers ';
        queryString += 'LEFT JOIN Users ';
        queryString += 'ON Users.userID = corporateMembers.userID WHERE Users.userID = ' + user_id + ' AND Users.userType = 3 '
        queryString += 'ORDER By Users.username;';

        this.connectionQuery(queryString, callback);

    },

    getNumbersBlood: function(bloodType, callback) {
        console.log(bloodType);
        // build the mysql query string
        var queryString = 'SELECT Users.userID, members.contactNum ';
        queryString += 'FROM Users ';
        queryString += 'LEFT JOIN members ';
        queryString += 'ON Users.userID = members.userID WHERE members.bloodType = ' + "'" + bloodType + "'" + ' AND Users.userType = 4 '
        queryString += 'ORDER By Users.userID;';
        console.log(queryString);
        this.connectionQuery(queryString, function(result){
            callback(result);
        });
        },

    getNumbers: function(callback) {
    
        // build the mysql query string
        var queryString = 'SELECT Users.userID, members.contactNum ';
        queryString += 'FROM Users ';
        queryString += 'LEFT JOIN members ';
        queryString += 'ON Users.userID = members.userID WHERE Users.userType = 4 '
        queryString += 'ORDER By Users.userID;';

        this.connectionQuery(queryString, function(result){
            callback(result);
        });
        },

    getCrisisDetails: function(callback) {
        
        // build the mysql query string
        var queryString = 'SELECT * ';
        queryString += 'FROM activeCrisis;';

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