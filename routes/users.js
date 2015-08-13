var express = require('express');
var router = express.Router();
var users = require('../models/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
	var myusers = users.get_users();
	res.send('respond with a resource');
	res.render('users', { title: 'Users' });
});
/* Login page loads when no data submited. */
router.get('/login', function(req, res, next) {
	res.render('login', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
	res.render('register', { title: 'Register' });
});

module.exports = router;