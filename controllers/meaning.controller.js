var word = require('../models/word');

/*
    Api Controller Thêm từ
    Input: Meaning chứa trong req.body
    Output: Thêm từ và điều hướng về view
*/
exports.postMeaning = async (req, res, next) => {
    // Gọi models yêu cầu thêm từ
    await word.addMeaning(req.body);
    // Điều hướng về view của từ
    res.redirect('/word/view?target=' + req.body.target);
}

/*
    Api Controller Sửa từ
    Input:  target và meaning cũ chứa trong chuỗi truy vấn(req.query)
            Meaning mới chứa trong req.body
    Output: Sửa từ và điều hướng về view
*/
exports.putMeaning = async (req, res, next) => {
    // Gọi models xóa meaning cũ
    await word.deleteMeaning(req.query.target, req.query.meaning);
    // Gọi models thêm meaning mới
    await word.addMeaning(req.body);
    // Điều hướng về lại view
    res.redirect('/word/view?target=' + req.body.target);
}

/*
    Api Controller xóa từ
    Input: target chứa trong chuỗi truy vấn(req.query)
    Output: Xóa từ và điều hướng về view
*/
exports.deleteMeaning = async (req, res, next) => {
    // Gọi models xóa từ
    word.deleteWord(req.query.target);
    // Điều hướng về view
    res.redirect('/word/view');
}