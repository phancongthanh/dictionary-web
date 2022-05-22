const Connection = require('mysql/lib/Connection');
var query = require('../data/query.database');

/**
 * Lấy mảng target chứa key
 * @param string key : Chuỗi cần tìm
 * @returns : Mảng các target chứa chuỗi key
 */
async function searchTarget(key) {
    try {
        const result = await query("SELECT DISTINCT target FROM word WHERE target LIKE '%" + key + "%';");
        return (result || []).map(x => x.target);
    } catch(err) {
        throw err;
    }
}

/**
 * Lấy word có target
 * @param string target : nghĩa tiếng anh của từ cần lấy
 * @returns : word từ cần lấy
 */
async function getWord(target) {
    const result = await query("SELECT * FROM word WHERE target = \'" + target + "\';");
    return result[0];
}  

/**
 * Thêm từ và database
 * @param word : Từ cần thêm
 */
async function addWord(word) {
    /* Chưa code */
    try {
        const result = query("INSERT INTO dictionary.word (target, pronunciation, vnMeaning, enMeaning, format, synonyms, example) VALUES (\'" 
        + word.target + "\',\'"+ word.pronunciation + "\',\'" + word.vnMeaning + "\',\'" + word.enMeaning + "\',\'" 
        + word.format + "\',\'" + word.synonyms + "\',\'" + word.example + "\');");
    } catch (err) {
        throw err;
    }
}

/**
 * Xóa từ
 * @param string target : Nghĩa tiếng anh của từ
 */
async function deleteWord(target) {
    try {
        const result = query( "DELETE FROM word WHERE target =\'" + target + "\';" );
    } catch (err) {
        throw err;
    }
}

module.exports = {
    searchTarget,
    getWord,
    addWord,
    deleteWord
}