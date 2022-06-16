require('dotenv').config()
const express = require('express')
const app  = express()
const hbs  = require('hbs')
const port = process.env.PORT || 3000
const path = require('path')
const intiRoutes = require('./routes/web') 
const expressSesion = require('express-session')
const MongoDb = require('connect-mongo') 
const storeSession =new MongoDb({mongoUrl:"mongodb://localhost:27017/",dbName:"pizzaOrdered",collectionName:"session"})




// register helper
hbs.registerHelper('JSON2String', function (object) { return JSON.stringify(object) }); 
hbs.registerHelper("setVar", function(varName, varValue, options) {
    options.data.root[varName]=(varValue)
  });

hbs.registerHelper("createObject", function(varName, options) {
    options.data.root[varName]=[]
}); 
  hbs.registerHelper("multiply", function(v1,v2) {
    return v1*v2;
  }); 
hbs.registerHelper('ternaryOperator', function (object) {  
    if(object){
        return object.totalQty
    }else{
        return '0'
    }
 });

// use middle ware of express session

app.use(expressSesion({saveUninitialized:false,resave:false,store:storeSession,secret:process.env.SESSION_SECRET,cookie:{httpOnly:true,maxAge:1000*60*60*24}}))
app.use(express.json())



app.use((req,res,next)=>{
    res.locals.session = req.session
    next()
})

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
// app.get('/cart', (req, res) => {
//     res.statusCode()
// })