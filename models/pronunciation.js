var query = require('../data/query.database');

/**
 * Lấy phát âm từ của target
 * @param string target : Nghĩa tiếng anh
 * @return : Trả về spelling của target
 */
async function getPronunciation(target) {
    /*
        Chưa code
        Truy vẫn query lấy pronunciation
     */
}

/**
 * Cập nhật phát âm của từ
 * @param string target : Nghĩa tiếng anh
 * @param string spelling : Phát âm của nghĩa tiếng anh đó
 */
async function setPronunciation(target, spelling) {
    /*
        Chưa code
        Truy vẫn query ghi pronunciation
     */
}

module.exports = {
    getPronunciation,
    setPronunciation
}