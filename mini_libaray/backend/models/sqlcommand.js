const mysql = require('mysql2')

const insertQuery = "insert into user_details(username, email, userpassword) values(?,?,?)"

module.exports = {insertQuery}