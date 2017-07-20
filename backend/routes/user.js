var express = require('express');
var router = express.Router();
var cUser = require('../controller/cUser')

/* GET User API. */
router.post('/', cUser.CreateUser);

module.exports = router;
