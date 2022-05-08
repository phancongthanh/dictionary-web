var word = require('../models/word');

/*Tìm từ*/
exports.getTargetsList = async (req, res, next) => {
    const key = req.query.key;
    const targets = await word.searchTarget(key);
    console.log(targets);
    res.json(targets);
}

/*Hiển thị tra từ*/
exports.getSearchView = (req, res, next) => {
    res.render('search');
}