/*
    SCHEMA be like:
    structure:
    {
        target: [PRIMARY KEY] String,
        spelling: String
    }

    //Example instance:
    pronunciations = [
        {
            target: "dictionary",
            spelling: "ˈdɪk.ʃən.ər.i"
        },
        {
            target: "word",
            spelling: "wɜːd"
        },
        ...
    ]

*/
var query = require('../data/query.database');

async function getPronunciation(target) {
    /*
        Chưa code
        Truy vẫn query lấy pronunciation
     */
}

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