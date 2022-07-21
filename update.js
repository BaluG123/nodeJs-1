const dbConnect=require('./mongodb')

const update = async ()=>{
    const db = await  dbConnect();
    const result = await db.updateOne(
        {name:'susmita'},{
            $set: {name:'sussi'}
        }
    )
}
update()