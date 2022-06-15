const express = require('express')
const app  = express()
const hbs  = require('hbs')
const port = process.env.PORT || 3000
const path = require('path')
const intiRoutes = require('./routes/web') 
intiRoutes(app);
require('./app/config/connection')

// set template engine
app.use(express.static(path.join(__dirname,'/public'))); 
hbs.registerPartials(path.join(__dirname,'/resources/views/partials'))
 
app.set('view engine','hbs') 

 
app.set('views',path.join(__dirname,'/resources/views')); 

app.listen(port,()=>{
    console.log(`This ${port} port number listening.`);
})