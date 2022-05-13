var word = require('../models/word');
var pronunciation = require('../models/pronunciation');

/*
    Api Controller Tra từ
    Input:  key chứa trong chuỗi truy vấn(req.query)
    Output: Trả về cho res mảng target thỏa mãn
*/
exports.getTargetsList = async (req, res, next) => {
    const key = req.query.key;
    const targets = await word.searchTarget(key);
    console.log(targets);
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
    const spelling = await pronunciation.getPronunciation(target);
    const meaningsList = await word.getMeaning(target);
    // Nếu tồn tại dự liệu của từ thì hiển thị, ngược lại 404
    if (meaningsList && meaningsList.length > 0)
        res.json({target, pronunciation: spelling, meanings: meaningsList});
}

/*
    Controller Hiển thị trang tìm/xem từ
    Input:
    Output: Trả về cho res trang view
*/
exports.getWordView = async (req, res, next) => {
    res.render('view');
}

/*
    Controller Hiển thị trang thêm từ
    Input:
    Output: Trả về cho res trang view
*/
exports.getAddView = (req, res, next) => {
    res.render('add');
}

/*
    Controller Hiển thị trang sửa từ
    Input:  target và meaning của từ cần sửa nằm trong chuỗi truy vấn(req.query)
    Output: Trả về cho res trang view sửa từ có target và meaning nhưng yêu cầu
*/
exports.getEditView = async (req, res, next) => {
    const meaning = await word.getMeaning(req.query.target).some(x => x.meaning === req.query.meaning);
    if (meaning) res.render('edit', {meaning});
}