const express = require('express');
const router = express.Router();

const{userlogin} = require('../../controllers/logins');
const{register} = require('../../controllers/logins')
// const{sendOTP} = require('../../controllers/logins');

router.post('/userlogin', userlogin);
router.post('/register', register);
// router.post('/send-OTP', sendOTP);

module.exports = router;