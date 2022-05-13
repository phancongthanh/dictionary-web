/*
    SCHEMA be like:
    structure:
    {
        target: String,
        meaning: String,
        format: String,
        synonyms: String,
        primary key(target, meaning)
    }

    //Example instance:
    words = [
        {
            target: "dictionary",
            meaning: "Từ điển",
            format: "Danh từ",
            synonyms: ""
        },
        {
            target: "word",
            meaning: "Từ",
            format: "Danh từ",
            synonyms: ""
        },
        ...
    ]

*/
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
 * Lấy mảng meaning có target
 * @param string target : nghĩa tiếng anh của từ cần lấy
 * @returns : Mảng các meaning có cùng target
 */
async function getMeaning(target) {
    return [
        {
            target,
            meaning: 'test1',
            format: 'Danh từ',
            example: 'abcd'
        },
        {
            target,
            meaning: 'test2',
            format: 'Danh từ',
            example: 'abcd'
        }
    ]
    /*
        Chưa xong,
        Truy vấn query lấy danh sách nghĩa của từ
     */
}

/**
 * Thêm từ(meaning) và database
 * @param {target, meaning, format, synonyms} meaning : Từ cần thêm
 */
async function addMeaning(meaning) {
    /* Chưa code */
}

/**
 * Xóa 1 meaning
 * @param string target : Nghĩa tiếng của từ cần xóa
 * @param string meaning : Nghĩa tiếng việt của từ cần xóa
 */
async function deleteMeaning(target, meaning) {
    /* Chưa code */
}

/**
 * Xóa từ(toàn bộ meaning của từ)
 * @param string target : Nghĩa tiếng anh của từ
 */
async function deleteWord(target) {
    /* Chưa code */
}

module.exports = {
    searchTarget,
    getMeaning,
    addMeaning,
    deleteMeaning,
    deleteWord
}