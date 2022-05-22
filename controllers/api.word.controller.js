var words = require('../models/word');

/*
    Api Controller Tra từ
    Input:  key chứa trong chuỗi truy vấn(req.query)
    Output: Trả về cho res mảng target thỏa mãn
*/
exports.getTargetsList = async (req, res, next) => {
    const key = req.query.key;
    const targets = await words.searchTarget(key);
    res.json(targets);
}

/*
    Api Controller Lấy từ
    Input:  target chứa trong chuỗi truy vấn(req.query)
    Output: Trả về toàn bộ thông tin từ
*/
exports.getWord = async (req, res, next) => {
    // Lấy target từ chuỗi truy vấn
    const target = req.query.target;
    // Lấy dự liệu của từ từ models
    const word = await words.getWord(target);
    // Nếu tồn tại dự liệu của từ thì hiển thị, ngược lại 404
    if (word) res.json(word);
}


/*
    Api Controller Thêm từ
    Input: word chứa trong req.body
    Output: Thêm từ vào database
*/
exports.postWord = async (req, res, next) => {
    try {
        // Gọi models yêu cầu thêm từ
        await words.addWord(req.body);
        // Kết thúc xử lý
        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(400);
    }
}

/*
    Api Controller Sửa từ
    Input:  target cũ chứa trong chuỗi truy vấn(req.query)
            Word mới chứa trong req.body
    Output: Sửa từ
*/
exports.putWord = async (req, res, next) => {
    try {
        // Gọi models xóa từ cũ
        await words.deleteWord(req.query.target);
        // Gọi models thêm từ mới
        await words.addWord(req.body);
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
exports.deleteWord = async (req, res, next) => {
    // Gọi models xóa từ
    words.deleteWord(req.query.target);
    // Điều hướng về view
    res.sendStatus(200);
}