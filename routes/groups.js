var express = require('express');
var router = express.Router();
var users_model = require('../models/users');
var crypto = require('crypto');
var Bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

router.get('/', function(req, res, next) {
	res.locals.session = req.session;
	var user = req.session.user;
	if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('groups', { title: 'Groups' });
	}
});

router.get('/groups/add', function(req, res, next) {
	res.locals.session = req.session;
	var user = req.session.user;
	if(!req.session.user){
		res.redirect('/login');
	}else{
		res.render('groups', { title: 'Add Group' });
	}
});

module.exports = router;