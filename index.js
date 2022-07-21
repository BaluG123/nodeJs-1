/*  
  This is One Way to check read operation !
const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const database="E-commerce";
const client = new MongoClient(url);

async function getData()
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('products');
    let response=await collection.find({}).toArray();
    console.log(response)
}
getData(); */

const dbConnect=require('./mongodb')

const main=async()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main()
