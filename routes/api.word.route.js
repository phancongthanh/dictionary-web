const express = require('express');
const router = express.Router();
const wordAPIController = require('../controllers/api.word.controller');

/*
    Search key
    GET: /word/search
    Client gửi API tra từ => Định hướng đến Controller tra từ.
*/
router.get('/search', wordAPIController.getTargetsList);

/*
    Get word
    GET: /word
    Client gửi API lấy từ => Định hướng đến Controller lấy từ.
*/
router.get('/', wordAPIController.getWord);


/*
    Add meaning
    POST: /meaning
    Client gửi API thêm từ(meaning) => Định hướng đến Controller thêm từ.
*/
router.post('/', wordAPIController.postWord);

/*
    Edit meaning
    PUT: /meaning
    Client gửi API sửa từ(meaning) => Định hướng đến Controller sửa từ.
*/
router.put('/', wordAPIController.putWord);

/*
    Delete meaning
    DELETE: /meaning
    Client gửi API xóa từ(meaning) => Định hướng đến Controller xóa từ.
*/
router.delete('/', wordAPIController.deleteWord);

module.exports = router;