/*
    Controller Hiển thị trang chủ
    Input:
    Output: Trả về cho res trang view của trang chủ
*/
exports.getHomeView = (req, res, next) => {
    res.render('index');
}