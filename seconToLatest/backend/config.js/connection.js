// const Sequelize = require('sequelize');
// require("dotenv").config()
// const sequelize = new Sequelize(process.env.DATABASE,process.env.DATABASE_USER,process.env.PASSWORD,
// {dialect:"mysql",host:"localhost"});
// sequelize.authenticate().then(()=>{
//     console.log("connected")
// }).catch(err=>{
// console.log(err)
// })


// const sequelize = new Sequelize("mini_library","root","Heavenfreak11",
// {dialect:"mysql",host:"localhost"});
const Sequelize = require('sequelize');
require("dotenv").config();  // Add the parentheses here
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  "Heavenfreak11",
  { dialect: "mysql", host: "localhost" }
);

sequelize.authenticate().then(() => {
  console.log("connected");
}).catch(err => {
  console.log(err);
});
