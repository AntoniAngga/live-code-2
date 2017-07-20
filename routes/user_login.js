var express = require('express');
var router = express.Router();
var cLogin = require('../controller/cLogin');
/* GET login API. */
router.get('/', cLogin.Login);

module.exports = router;
