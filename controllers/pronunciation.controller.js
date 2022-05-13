var pronunciation = require('../models/pronunciation');

/*
    Controller Hiển thị sửa phát âm
    Input:  target chứa trong chuỗi truy vấn(req.query)
    Output: Trả về cho res trang view
*/
exports.getPronunciationView = async (req, res, next) => {
    // Lấy target từ query
    const target = req.query.target;
    // Nếu có target từ xử lý, ngược lại để lỗi 404
    if (target) {
        // Lấy spelling đã có từ models
        const spelling = await pronunciation.getPronunciation(target)
        // Tạo trang edit pronunciation gửi cho Client
        res.render('pronunciation', {target, pronunciation: spelling || ""});
    }
}

/*
    Api Controller Sửa phát âm
    Input:  target và pronunciation mới chứa trong thân request(req.body)
    Output: Sửa phát âm trong database
*/
exports.putPronunciation = async (req, res, next) => {
    // Lấy dữ liệu từ request
    const target = req.body.target;
    // Nếu có dữ liệu thì xử lý, ngược lại lỗi 400
    if (target) {
        const spelling = req.body.pronunciation;
        // Gọi models đặt lại pronunciation
        await pronunciation.setPronunciation(target, spelling || "");
        // Điều hướng về view
        res.sendStatus(200);
    } else res.sendStatus(400);
}