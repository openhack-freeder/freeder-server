var Sequelize = require('sequelize');
var express = require('express');
var models = require('../models/');
var router = express.Router();

router.get('/', function(req, res) {
	models.contents.findAll().then(full => res.json(full))
});

module.exports = router;
