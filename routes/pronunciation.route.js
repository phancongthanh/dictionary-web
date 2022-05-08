const express = require('express');
const router = express.Router();
const pronunciationController = require('../controllers/pronunciation.controller');

/* GET pronunciation edit page*/
router.get('/', pronunciationController.getPronunciationView);

/* PUT edit pronunciation */
router.put('/', pronunciationController.putPronunciation);

module.exports = router;