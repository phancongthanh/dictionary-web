const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET search page */
router.get('/search', controller.getSearchView);
/* GET view page */
router.get('/view', controller.getWordView);
/* GET add page */
router.get('/add', controller.getAddView);
/* GET edit page */
router.get('/edit', controller.getEditView);
/* GET speech edit page*/
router.get('/speech', controller.getSpeechView);

/* GET search API */
router.get('/api/search', controller.getTargetsList);
/* POST add meaning */
router.post('/add', controller.postMeaning);
/* PUT edit meaning */
router.put('/edit', controller.putMeaning);

module.exports = router;
