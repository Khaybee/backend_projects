const mysql = require('mysql2')


const pool = mysql.createPool(
    {connectionLimit:10,
        host:"b1an8rie9t1ceflxeesl-mysql.services.clever-cloud.com",
        password:"0xuxjSVaUuTh7buNf67y",
        user:"u9gjpv9nay25xfth",
        database:"b1an8rie9t1ceflxeesl"
    })

function getConnection(){
    return new Promise((resolve,reject)=>{
pool.getConnection((err,connection)=>{
    if(err)
    {reject(err)}
    else
    {
        resolve(connection)
    }
})


    })
}




function runQueryValues(conn,sqlQuery,values){
   return new Promise((resolve,reject)=>{
conn.query(sqlQuery,values,(err,result)=>{
    if(err){
        reject(err)

    }
    else{
        resolve(result)
    }
})
   })
}

const sql = "insert into product(product_name,unit_price,quantity,total)values(?,?,?,?)";

const signupSyntax = "insert into users(username, userpassword, email)values(?,?,?)";

const loginSyntax = "select * from users where username = ?" 

const emailLogin = "select * from users where email = ?" 

// const updateLogin = "update users set userpassword = ? where username = ?"

const updateLogin = "update users set userpassword = ? where email = ?"



module.exports = {getConnection,runQueryValues,sql,signupSyntax, loginSyntax, updateLogin, emailLogin}