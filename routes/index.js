var express = require('express');
var users_model = require('../models/users');
var crypto = require('crypto');
var Bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.session = req.session;
	res.render('index', { title: 'OpenLabs' });
});

router.get('/login', function(req, res, next) {
	res.locals.session = req.session;
	res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
 	var email 		= req.body.email;
	var password 	= req.body.password;

	users_model.get_user(email,function(result){
		if (result.rows.length == 1 ) {
			var hash_password = result.rows[0]['password'];
			Bcrypt.compare(password, hash_password, function(err, isMatch) {
		        if(err) {
		            return console.error(err);
		        }

		        if (isMatch) {
		        	req.session.user = result.rows[0];
		        	res.locals.session = req.session;
		        	res.redirect('/');
		        }else{
		        	res.locals.session = req.session;
		        	res.render('login', { title: 'Login', message: 'Wrong password. Click <a href="#">here</a> to reset your password' });
		        }
		    });
		}else{
			res.locals.session = req.session;
			res.render('login', { title: 'Login', message: 'The user email is not registered.' });
		}
	});
});

router.get('/register', function(req, res, next) {
	res.locals.session = req.session;
	res.render('register', { title: 'Register' });
});

router.post('/register', function(req, res, next){
	var firstname 	= req.body.firstname;
	var lastname 	= req.body.lastname;
	var email 		= req.body.email;
	var password 	= req.body.password;
	var birthday 	= req.body.birthday;
	var gender 		= req.body.gender;
	var profession 	= req.body.profession;
	var affiliation = req.body.affiliation;
	var country 	= req.body.country;
	var bio 		= req.body.bio;
	var user_hash		= crypto.randomBytes(10).toString('hex');

	users_model.get_user(email,function(result){
		if (result.rows.length == 0 ) {
			Bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		        if(err) {
		        	return console.error(err);
		        }
		        Bcrypt.hash(password, salt, function(err, hash) {
		        	if(err) {
		        		return console.error(err);
		        	}
		        	var query = [user_hash,firstname,lastname,email,hash,birthday,gender,profession,affiliation,country,bio];
		        	if (users_model.add_user(query)){
		        		res.locals.session = req.session;
						res.redirect('/');
					}else{
						res.locals.session = req.session;
						res.render('register', { title: 'Register', message: ''});
					}
		    	});
			});
		}else{
			res.locals.session = req.session;
			res.render('register', { title: 'Register', message: 'User already exists. Please login or reset your password.'});
		}
	});
});

router.get('/logout', function(req, res, next) {
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;