const express = require('express');
const router = express.Router();
const meaningController = require('../controllers/meaning.controller');

/*
    Add meaning
    POST: /meaning
    Client gửi API thêm từ(meaning) => Định hướng đến Controller thêm từ.
*/
router.post('/', meaningController.postMeaning);

/*
    Edit meaning
    PUT: /meaning
    Client gửi API sửa từ(meaning) => Định hướng đến Controller sửa từ.
*/
router.put('/', meaningController.putMeaning);

/*
    Delete meaning
    DELETE: /meaning
    Client gửi API xóa từ(meaning) => Định hướng đến Controller xóa từ.
*/
router.delete('/', meaningController.deleteMeaning);

module.exports = router;