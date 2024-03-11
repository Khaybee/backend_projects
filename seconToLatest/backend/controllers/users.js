const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')


const secret = "tech4dev";

const users = {
     user_id : 1,
     username : "user"
}

const home = async(req,res)=>{
res.status(200).json({message:"message"})
}
const about = async(req,res)=>{
// res.status(200).json({message: res.locals.username})
res.status(200).json({message: req.text})
}

// const login = async(req, res) => {
//      const token = jwt.sign(users, secret)
//      console.log(token)
//      res.send({})
// }

const details = async(req, res) => {
     console.log({message : "dtails received"})
     res.send({message : "dtails received"})
}

module.exports= {home, about, details }