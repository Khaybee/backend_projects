const mysql = require('mysql2');
const pool = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'user_database',
})

const connect = mysql.createPool({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'',
    database:'techhaven',
})

const s_users = "select * from customer";

const insertUser_query = "insert into customer(cus_FullName, cus_contact, email, cusdate) values(?,?,?,?) "

module.exports ={mysql,pool,s_users, insertUser_query}
