const express = require('express');
const router = express.Router();
const cLogin = require('../controller/cLogin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', cLogin.Login)

module.exports = router;
