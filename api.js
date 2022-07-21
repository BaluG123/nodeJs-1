const express = require('express');
const dbConnect=require('./mongodb');
const app=express();
const mongodb=require('mongodb')

// Get Method!
app.get('/',async (req,res)=>{
    let db = await dbConnect();
    data = await db.find().toArray();
    console.log(data)
    //res.send({name:"balu"})
    res.send(data)
}) 

app.use(express.json());

// Its not working
app.set('view engine','ejs');
app.get('/profile', async (req,res)=>{
    let db= await dbConnect();
    data = await db.find().toArray();
    res.render('profile',{data})
})


// POST METHOD! 
app.post('/',async (req,res)=>{
    const db=await dbConnect();
    const result= await db.insert(req.body);
    res.send(result);
}) 


// this is put method with parameter passing inside postman
app.put('/:name',async (req,res)=>{
    const db = await dbConnect();
    const result = await db.updateOne(
        {name:req.params.name},
        {$set: req.body}
    )
    console.log(result);
    res.send(req.body)
}) 

// Put methos with no parameter passing !
app.put('/',async (req,res)=>{
   const db = await dbConnect();
   const result = await db.updateOne(
    {name:req.body.name},
    {$set: req.body}
   );
   console.log(result);
   res.send(req.body)

})

//delete Method
app.delete('/:id',async (req,res)=>{
    const db = await dbConnect();
    const result = await db.deleteOne(
        {_id:new mongodb.ObjectId(req.params.id)}
    );
    res.send(result)
    if(result.acknowledged){
        console.log('deleted successfully!')
    }
})


app.listen(5000);

