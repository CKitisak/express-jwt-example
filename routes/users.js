var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var users = [
    { _id: '93ruTNqZ', name: 'Alice' },
    { _id: 'HhwxfSj7', name: 'David' },
    { _id: 'mnqvATNr', name: 'John' },
    { _id: 'Xn64chV4', name: 'Sarah' }
  ];

  res.send(users);
});

module.exports = router;
