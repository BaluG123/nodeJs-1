const dbconnect = require('./mongodb')

const del = async ()=>{
    const db=await dbconnect();
    let result=await db.deleteOne({name:'balu'})
    console.log(result)
    if(result.acknowledged){
        console.log('deleted !')
    }
}

del();
