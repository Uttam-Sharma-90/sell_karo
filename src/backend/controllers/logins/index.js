const{adminlogin} = require('./controls/adminLogin');
const{userlogin} = require('./controls/userLogin');
const{sendOTP} = require('./controls/twilio-sms')

module.exports = {adminlogin, userlogin, sendOTP};