const express = require('express');
const router = express.Router();

const loginRoute = require('./logins'); 

router.use('/login', loginRoute);

module.exports = router;