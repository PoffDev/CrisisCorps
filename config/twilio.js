var accountSid = process.env.TWILIO_ACCOUNT_SID || 'AC51a56f735df333a9667582b17b3ad4bc'; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN || '28320b11dd61e8b72c0168f3ead47df8';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);


var textMembers = function(to, from, body) {
    client.messages.create({
        to: to,  // Text this number
        from: from || '+13213949251', // From a valid Twilio number
        body: body
            
    }, function(err, message) {
        console.log(err);
        console.log(message.sid);
    });
};

module.exports = textMembers;