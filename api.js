const express = require('express');
const dbConnect=require('./mongodb');
const app=express();


app.get('/',async (req,res)=>{
    let db = await dbConnect();
    data = await db.find().toArray();
    console.log(data)
    //res.send({name:"balu"})
    res.send(data)
}) 

app.use(express.json());

/* Its not working
app.set('view engine','ejs');
app.get('/profile', async (req,res)=>{
    let db= await dbConnect();
    data = await db.find().toArray();
    res.render('profile',{data})
}) */

app.post('/',async (req,res)=>{
    const db=await dbConnect();
    const result= await db.insert(req.body);
    res.send(result);
})

app.listen(5000);