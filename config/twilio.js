var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);


var textMembers = function(to, from, body) {
    client.messages.create({
        to: to,  // Text this number
        from: from, // From a valid Twilio number
        body: body
            
    }, function(err, message) {
        console.log(err);
        console.log(message.sid);
    });
};

module.exports = textMembers;