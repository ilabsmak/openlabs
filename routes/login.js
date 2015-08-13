var express = require('express');
var router = express.Router();

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/', function(req, res, next) {
  res.render('login', { title: 'login' });
});

module.exports = router;
