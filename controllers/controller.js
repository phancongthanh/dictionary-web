const database = require("../data/database");

/*Tìm từ*/
exports.getTargetsList = (req, res, next) => {
    const key = req.query.key;
    res.send(database.search(key));
}

/*Thêm từ*/
exports.postMeaning = (req, res, next) => {
    database.addMeaning(req.body);
    res.redirect('/view?target=' + req.body.target);
}

/*Sửa từ*/
exports.putMeaning = (req, res, next) => {
    database.deleteMeaning(req.query.target, req.query.meaning);
    database.addMeaning(req.body);
    res.redirect('/view?target=' + req.body.target);
}

/*Sử phát âm*/
exports.putSpeech = (req, res, next) => {
    database.setSpeech(req.body.target, req.body.speech);
    res.redirect('/view?target=' + req.body.target);
}

/*Hiển thị tra từ*/
exports.getSearchView = (req, res, next) => {
    res.render('search');
}

/*Hiển thị từ*/
exports.getWordView = (req, res, next) => {
    const target = req.query.target;
    const speech = database.getSpeech(target);
    const meaningsList = database.getMeaning(target);
    res.render('view', {target, speech, meanings: meaningsList});
}

/*Hiển thị thêm từ*/
exports.getAddView = (req, res, next) => {
    res.render('add');
}

/*Hiển thị sửa từ*/
exports.getEditView = (req, res, next) => {
    const meaning = database.getMeaning(req.query.target).some(x => x.meaning === req.query.meaning);
    if (meaning) res.render('edit', {meaning});
}

/*Hiển thị sửa phát âm*/
exports.getSpeechView = (req, res, next) => {
    const speech = database.getSpeech(req.query.target);
    res.render('speech', {target: req.query.target, speech});
}