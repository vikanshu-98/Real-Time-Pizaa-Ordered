const express = require('express')
const app  = express()
const hbs  = require('hbs')
const port = process.env.PORT || 3000
const path = require('path')

  
 
 

// set template engine
app.use(express.static(path.join(__dirname,'/public'))); 
hbs.registerPartials(path.join(__dirname,'/resources/views/partials'))
 
app.set('view engine','hbs') 

 
app.set('views',path.join(__dirname,'/resources/views')); 
app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cart',(req,res)=>{
    res.render('customer/cart')
})
 
app.get('/login',(req,res)=>{
    res.render('auth/login')
})
 
app.get('/register',(req,res)=>{
    res.render('auth/register')
})


 
app.listen(port,()=>{
    console.log(`This ${port} port number listening.`);
})