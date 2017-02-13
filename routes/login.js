var express = require('express');
var router  = express.Router();
var jwt     = require('jsonwebtoken');

router.post('/', function (req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  // validate username and password...


  // if username and password matched then generating jsonwebtoken
  var token = jwt.sign(
    // data to encrypt
    {
      username: username
    },
    // secret
    'very very secure secret 111999',
    // token expiration
    {
      expiresIn: '24h'
    }
  );

  res.send(token);
});

module.exports = router;
