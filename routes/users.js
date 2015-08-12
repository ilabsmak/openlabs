var express = require('express');
var router = express.Router();
var users = require('../models/users')
/* GET users listing. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
	var myusers = users.get_users();
  res.send('respond with a resource');
=======
  res.render('users', { title: 'Users' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
>>>>>>> 264b1aa44126b8a2f1c157603d3d57fcf896b6e6
});

module.exports = router;
