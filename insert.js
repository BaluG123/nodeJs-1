const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insert(
       [
        {name: 'balesh',gender:'male',age:16,email:'balesh@gmail.com'} ,
        {name: 'chaitra',gender:'female',age:15,email:'chaitra@gmail.com'},
        {name:'gopal',gender:'male',age:20}
       ]
        )
}
insert();
