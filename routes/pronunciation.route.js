const express = require('express');
const router = express.Router();
const pronunciationController = require('../controllers/pronunciation.controller');

/*
    Get pronunciation edit page
    GET: /pronunciation
    Client lấy trang chỉnh sửa phát âm từ
        => Định hướng đến Controller lấy view của trang sửa phát âm.
*/
router.get('/', pronunciationController.getPronunciationView);

/*
    Get edit pronunciation
    PUT: /pronunciation
    Client gửi API yêu cầu sửa phát âm
        => Định hướng đến Controller sửa phát âm.
*/
router.put('/', pronunciationController.putPronunciation);

module.exports = router;