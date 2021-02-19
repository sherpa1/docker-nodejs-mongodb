const express = require('express');
const router = express.Router();

const users = require('../data/users');

/* GET users listing. */
router.get('/', function (req, res, next) {
  // res.send('respond with a resource');
  res.json(users);
});

module.exports = router;
