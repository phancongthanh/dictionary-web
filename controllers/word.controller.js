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
    Input:
    Output: Trả về cho res trang view
*/
exports.getEditView = async (req, res, next) => {
    res.render('edit');
}