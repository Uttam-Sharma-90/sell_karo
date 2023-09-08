const express = require('express');
const router = express.Router();

const loginRoute = require('./logins'); 
const sellerRoute = require('./seller'); 

router.use('/login', loginRoute);
router.use('/seller', sellerRoute);

module.exports = router;