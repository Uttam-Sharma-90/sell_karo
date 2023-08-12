const express = require('express');
const router = express.Router();

const{adminlogin} = require('../../controllers/logins');
const{userlogin} = require('../../controllers/logins');
const{sendOTP} = require('../../controllers/logins')

router.post('/admin', adminlogin);
router.post('/userlogin', userlogin);
router.post('/send-OTP', sendOTP);


module.exports = router;