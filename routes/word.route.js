const express = require('express');
const router = express.Router();
const wordController = require('../controllers/word.controller');

/*
    Search key
    GET: /word/search
    Client gửi API tra từ => Định hướng đến Controller tra từ.
*/
router.get('/search', wordController.getTargetsList);

/*
    Get word
    GET: /word
    Client gửi API lấy từ => Định hướng đến Controller lấy từ.
*/
router.get('/', wordController.getWord);

/* GET view page */
router.get('/view', wordController.getWordView);
/* GET add page */
router.get('/add', wordController.getAddView);
/* GET edit page */
router.get('/edit', wordController.getEditView);

module.exports = router;