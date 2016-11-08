var express = require('express');
var router = express.Router();
var cars = [];

/* GET users listing. */
router.post('/', function(req, res) {
	cars.push(req.body);
 	res.send(cars);
});

module.exports = router;
