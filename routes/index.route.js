const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');

/* GET search page */
router.get('/search', indexController.getSearchView);

/* GET search API */
router.get('/api/search', indexController.getTargetsList);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
