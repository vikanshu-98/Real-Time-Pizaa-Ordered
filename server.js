const express = require('express')
const app  = express()
const hbs  = require('hbs')
const port = process.env.PORT || 3000
const path = require('path')

  
 
app.get('/',(req,res)=>{
     res.render('home')
})

// set template engine
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','hbs') 

 
app.listen(port,()=>{
    console.log(`This ${port} port number listening.`);
})