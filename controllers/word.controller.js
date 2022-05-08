var word = require('../models/word');
var pronunciation = require('../models/pronunciation');

/*Thêm từ*/
exports.postMeaning = async (req, res, next) => {
    await word.addMeaning(req.body);
    res.redirect('/view?target=' + req.body.target);
}

/*Sửa từ*/
exports.putMeaning = async (req, res, next) => {
    await word.deleteMeaning(req.query.target, req.query.meaning);
    await word.addMeaning(req.body);
    res.redirect('/view?target=' + req.body.target);
}

/*Hiển thị từ*/
exports.getWordView = async (req, res, next) => {
    const target = req.query.target;
    const spelling = await pronunciation.getPronunciation(target);
    const meaningsList = await word.getMeaning(target);
    if (meaningsList && meaningsList.length > 0)
        res.render('view', {target, pronunciation: spelling, meanings: meaningsList});
}

/*Hiển thị thêm từ*/
exports.getAddView = (req, res, next) => {
    res.render('add');
}

/*Hiển thị sửa từ*/
exports.getEditView = async (req, res, next) => {
    const meaning = await word.getMeaning(req.query.target).some(x => x.meaning === req.query.meaning);
    if (meaning) res.render('edit', {meaning});
}