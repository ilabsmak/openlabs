var express = require('express');
var router = express.Router();
var users = require('../models/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
	var myusers = users.get_users();
  res.send('respond with a resource');
});

module.exports = router;