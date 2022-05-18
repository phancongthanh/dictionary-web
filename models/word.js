var query = require('../data/query.database');

/**
 * Lấy mảng target chứa key
 * @param string key : Chuỗi cần tìm
 * @returns : Mảng các target chứa chuỗi key
 */
async function searchTarget(key) {
    try {
        const result = await query("SELECT DISTINCT target FROM word WHERE target LIKE '%" + key + "%';");
        return result || [];
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
    return {
        target,
        vnMeaning: "Test1",
        enMeaning: "Test2",
        format: "noun",
        synonyms: "Test4",
        example: "Test5"
    }
    /*
        Chưa xong,
        Truy vấn query lấy danh sách nghĩa của từ
     */
}

/**
 * Thêm từ và database
 * @param word : Từ cần thêm
 */
async function addWord(word) {
    /* Chưa code */
}

/**
 * Xóa từ
 * @param string target : Nghĩa tiếng anh của từ
 */
async function deleteWord(target) {
    /* Chưa code */
}

module.exports = {
    searchTarget,
    getWord,
    addWord,
    deleteWord
}