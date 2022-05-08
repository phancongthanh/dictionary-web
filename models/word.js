/*
    SCHEMA be like:
    structure:
    {
        target: String,
        meaning: String,
        format: String,
        example: String,
        primary key(target, meaning)
    }

    //Example instance:
    words = [
        {
            target: "dictionary",
            meaning: "Từ điển",
            format: "Danh từ",
            example: "This is a dictionary."
        },
        {
            target: "word",
            meaning: "Từ",
            format: "Danh từ",
            example: "This dictionary has many words."
        },
        ...
    ]

*/
var query = require('../data/query.database');

async function searchTarget(key) {
    try {
        const result = await query("SELECT DISTINCT target FROM word WHERE target LIKE '%" + key + "%';");
        return result || [];
    } catch(err) {
        throw err;
    }
}
  
async function getMeaning(target) {
    return [
        {
            target,
            meaning: 'test',
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
  
async function addMeaning(meaning) {
    /* Chưa code */
}

async function deleteMeaning(target, meaning) {
    /* Chưa code */
}

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