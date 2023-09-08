const express = require('express');
const router = express.Router();

const{postAds} = require('../../controllers/sellers');

router.post('/postads', postAds);

module.exports = router;