require('dotenv').config();
const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  port: process.env.MYSQL_PORT || 3306,
  debug: process.env.NODE_ENV == "development"
})

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

// migration database
const createDatabaseSQL = "CREATE DATABASE IF NOT EXISTS " + (process.env.MYSQL_DATABASE || "dictionary") + ";";
connection.query(createDatabaseSQL, function(err, result) {
  if (err) throw err;
})

const selectDatabase = "USE " + (process.env.MYSQL_DATABASE || "dictionary") + ";";
connection.query(selectDatabase, function(err, result) {
  if (err) throw err;
})

const createWordTable = "CREATE TABLE IF NOT EXISTS word(target VARCHAR(20) NOT NULL, meaning VARCHAR(50) NOT NULL, format VARCHAR(10), synonyms VARCHAR(200), PRIMARY KEY(target, meaning));";
const createPronunciationTable = "CREATE TABLE IF NOT EXISTS pronunciation(target VARCHAR(20) NOT NULL PRIMARY KEY, spelling VARCHAR(20) NOT NULL);";

connection.query(createWordTable, function(err, result) {
  if (err) throw err;
})
connection.query(createPronunciationTable, function(err, result) {
  if (err) throw err;
})

module.exports = util.promisify(connection.query).bind(connection);