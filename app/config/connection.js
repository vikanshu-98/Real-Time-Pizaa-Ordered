const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/pizzaOrdered")
.then(()=>{console.log('connect successfully');})
.catch((err)=>{console.log(err);})



