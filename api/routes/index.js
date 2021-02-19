var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hello Docker' });
});

/* POST home page. */
router.post('/', function (req, res, next) {
  res.render('index', { title: 'You can\'t POST Hello Docker' });
});

module.exports = router;
