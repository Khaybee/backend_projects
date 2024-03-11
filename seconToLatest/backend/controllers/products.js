const {getConnection,runQueryValues,sql} = require('../model/dbPool')
async function call(){
    const connection = await getConnection();
   try{
   const result =  await runQueryValues(connection ,sql,['Sugar',1,2,3])
   console.log(result)
   }
   catch(err){
   console.log(err)
   }   
   }
   call()