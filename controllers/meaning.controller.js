var word = require('../models/word');

/*
    Api Controller Thêm từ
    Input: Meaning chứa trong req.body
    Output: Thêm từ(meaning) vào database
*/
exports.postMeaning = async (req, res, next) => {
    try {
        // Gọi models yêu cầu thêm từ
        await word.addMeaning(req.body);
        // Kết thúc xử lý
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(400);
    }
}

/*
    Api Controller Sửa từ
    Input:  target và meaning cũ chứa trong chuỗi truy vấn(req.query)
            Meaning mới chứa trong req.body
    Output: Sửa từ
*/
exports.putMeaning = async (req, res, next) => {
    try {
        // Gọi models xóa meaning cũ
        await word.deleteMeaning(req.query.target, req.query.meaning);
        // Gọi models thêm meaning mới
        await word.addMeaning(req.body);
        // Kết thúc xử lý
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(400);
    }
}

/*
    Api Controller xóa từ
    Input: target chứa trong chuỗi truy vấn(req.query)
    Output: Xóa từ(nghĩa từ: meaning)
*/
exports.deleteMeaning = async (req, res, next) => {
    // Gọi models xóa từ
    word.deleteWord(req.query.target);
    // Điều hướng về view
    res.sendStatus(200);
}