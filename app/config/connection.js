
require('dotenv').config()
const dbOptions = { 
    connectTimeoutMS: 10000, 
};
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_SECRET_KEY,dbOptions)  
.then(()=>{console.log('connect successfully');})
.catch((err)=>{console.log(err);})

