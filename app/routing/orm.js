var connection = require('./connection.js');

// object relational mapper (ORM)


var orm = {
    //form data entry queries
    member: function(res, render) {
        var queryString = 'INSERT INTO members (MemberName, EmailAddress, ContactNum, TwitterHandle, BloodType) VALUES (?, ?, ?, ?)', [req.body.MemberName, req.body.EmailAddress, req.body.TwitterHandle, req.body.BloodType], connection.query(queryString, function(err, result) {
                if (err) throw err;
                console.log(result);
                res.redirect('/');
            });
        },
    corporateMember: function(res, render){ 
    var queryString = 'INSERT INTO members (CompanyName, Contact Name, EmailAddress, ContactNum, DonationDesc) VALUES (?, ?, ?, ?)', [req.body.MemberName, req.body.ContactName, req.body.EmailAddress, req.body.ContactNum, req.body.DonationDesc,], connection.query(queryString, function(err, result) {
                if (err) throw err;
                console.log(result);
                res.redirect('/');
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