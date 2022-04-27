/*
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "20020216",
  database: "dictionary"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/

function searchTarget(key) {
  return [a,b,c,d,e];
}

function getMeaning(target) {
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
}

function addMeaning(meaning) {

}

function deleteMeaning(target, meaning) {

}

function deleteWord(e) {

}

function getSpeech(target) {
  return "speehc test"
}

function setSpeech(target, speech) {

}

module.exports = {
    searchTarget,
    getMeaning,
    addMeaning,
    deleteMeaning,
    deleteWord,
    getSpeech,
    setSpeech
}