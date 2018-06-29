var Sequelize = require('sequelize');
var express = require('express');
var models = require('../models/');
var router = express.Router();

router.get('/api/v1/get_content', function(req, res) {
	models.contents.findAll().then(full => res.json(full))
});

/* todo
	1. new content api
	2. title, subtitle api
	3. thinking 🤔
*/
module.exports = router;
