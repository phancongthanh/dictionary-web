const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');
const wordController = require('../controllers/word.controller');

/* GET view page */
router.get('/view', wordController.getWordView);
/* GET add page */
router.get('/add', wordController.getAddView);
/* GET edit page */
router.get('/edit', wordController.getEditView);

/*
    Get home page
    GET: /
    Client vào trang chủ => Định hướng đến Controller lấy view của trang chủ.
*/
router.get('/', indexController.getHomeView);

module.exports = router;