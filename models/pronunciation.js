var query = require('../data/query.database');

/**
 * Lấy phát âm từ của target
 * @param string target : Nghĩa tiếng anh
 * @return : Trả về spelling của target
 */
async function getPronunciation(target) {
    /*
        Truy vẫn query lấy pronunciation
     */
    try {
        const result = query ("SELECT pronunciation FROM word WHERE target ='"+ target + "';");
        return result;
    } catch (err) {
        throw err;
    }
   
}

/**
 * Cập nhật phát âm của từ
 * @param string target : Nghĩa tiếng anh
 * @param string spelling : Phát âm của nghĩa tiếng anh đó
 */
async function setPronunciation(target, spelling) {
    /*
        Truy vẫn query ghi pronunciation
     */
    try {
        const result = query ("UPDATE word SET pronunciation =\'" + spelling + "\' WHERE target =\'" + target + "\';" );
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getPronunciation,
    setPronunciation
}