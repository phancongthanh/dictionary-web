var pronunciation = require('../models/pronunciation');

/*Hiển thị sửa phát âm*/
exports.getPronunciationView = async (req, res, next) => {
    const target = req.query.target;
    if (target) {
        const spelling = await pronunciation.getPronunciation(target)
        if (spelling) res.render('pronunciation', {target, pronunciation: spelling});
    }
}

/*Sử phát âm*/
exports.putPronunciation = async (req, res, next) => {
    const target = req.body.target;
    const spelling = req.body.pronunciation;
    if (target && spelling) {
        await pronunciation.setPronunciation(target, spelling);
        res.redirect('/view?target=' + target);
    }
}