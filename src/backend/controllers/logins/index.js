// const{sendOTP} = require('./controls/twilio-sms');
const{userlogin} = require('./controls/userLogin');
const{register} = require('./controls/registerUser');

module.exports = {userlogin, register}; 