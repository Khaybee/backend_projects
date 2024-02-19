const fs = require('fs')
const {pool,s_users, insertUser_query} = require('../model/getPool')
// const {mysql,pool,s_users} = require('.')
const homefun = (req, res) => {
    res.send("Home Page");
}

const list = (req, res) => {
    res.send("list page");
}


const createUser =  async(req, res) => {
    const userDetails = {
        cus_FullName: req.body.cus_FullName,
        cus_contact: req.body.cus_contact,
        cusdate: req.body.cusdate,
        email: req.body.email,
    }
    // res.send(userDetails);
await insertUser(res, userDetails)

// try{
//     const rs = await insertUser(res, userDetails)
//     res.send(rs)
//     console.log(rs)
// }catch(err){
//     res.send(err)
// }

    // const rs = await insertUser(userDetails)
    // res.send(rs)

    // pool.getConnection((err,connection)=>{
    //             if (err) {
    //               res.send(err);
    //               console.log("Error detected");
    //             } 
    //             connection.query(insertUser_query,[userDetails.cus_FullName,userDetails.cus_contact,userDetails.email,userDetails.cusdate],(err,result)=>{
    //                 connection.release();
    //                 if(err){
    //                    console.log("Error detected");
    //                    res.send(err)
    //                 }
    //                 res.send(result) ;
    //             })
    //         })

}
    

const showUsers=(req,res)=>{
    pool.getConnection((err,connection)=>{
        if(err){
            res.send("error connecting to database")
            console.log(err);
            return;
        }
    connection.query(s_users,(err,result)=>{
        connection.release();
        if(err) throw err;
        res.json(result);
    })
    })
}

// const insertUser = async(res, data) => {
//     pool.getConnection((err, connecton) => {
//         if(err) {
//             res.send(err);
//         }
//         connecton.query(insertUser_query, [data.cus_FullName, data.cus_contact, data.email, data.cusdate], (err, result)=>{
//             connecton.release()
//             if (err) {
//                 console.log(err)
//                 res.send(err)
//             }
//             res.send(result);
//         })
//     })
// }


const insertUser = async(res, data) => {
    pool.getConnection((err, connecton) => {
        if(err) {
            res.send(err);
            return err;
        }
        connecton.query(insertUser_query, [data.cus_FullName, data.cus_contact, data.email, data.cusdate], (err, result)=>{
            connecton.release()
            if (err) {
                console.log(err)
                res.send(err)
                return err;
            }
            res.send(result);
            return result;
        })
    })
}


module.exports = { homefun, list, createUser,showUsers }