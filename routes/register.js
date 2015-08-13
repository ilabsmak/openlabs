var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/' function(req, res, next){
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
	res.write('Post');
});

module.exports = router;
