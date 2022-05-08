const express = require('express');
const router = express.Router();
const wordController = require('../controllers/word.controller');

/* GET view page */
router.get('/view', wordController.getWordView);
/* GET add page */
router.get('/add', wordController.getAddView);
/* GET edit page */
router.get('/edit', wordController.getEditView);

/* POST add meaning */
router.post('/add', wordController.postMeaning);
/* PUT edit meaning */
router.put('/edit', wordController.putMeaning);

module.exports = router;