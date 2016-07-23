
var mysql = require('mysql');

var connection = mysql.createConnection(process.env."mysql://pjlc8f428yypqnpn:pjtaneetor2n5kq5@q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s27my4o1x31ym0ws")

		
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;