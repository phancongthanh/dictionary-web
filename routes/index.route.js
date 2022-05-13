const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');

/*
    Get home page
    GET: /
    Client vào trang chủ => Định hướng đến Controller lấy view của trang chủ.
*/
router.get('/', indexController.getHomeView);

module.exports = router;
