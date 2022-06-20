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
const flash = require('express-flash')
const passport  = require('passport') 
const moment   = require('moment')
// register helper
hbs.registerHelper('JSON2String', function (object) { return JSON.stringify(object) }); 
hbs.registerHelper("setVar", function(varName, varValue, options) {
  options.data.root[varName]=(varValue)
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

hbs.registerHelper('changeDateFormat',function(object){
    return moment(object).format('hh:mm:ss A')
})

// use middleware

app.use(expressSesion({saveUninitialized:false,resave:false,store:storeSession,secret:process.env.SESSION_SECRET,cookie:{httpOnly:true,maxAge:1000*60*60*24}}))

//passport config
const intializePassport =require('./app/config/passport')
intializePassport(passport)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(flash())

app.use((req,res,next)=>{
    res.locals.session = req.session
    res.locals.users  = req.user
    next()
})

 

app.use(express.static(path.join(__dirname,'/public'))); 
hbs.registerPartials(path.join(__dirname,'/resources/views/partials'))

// set template engine
app.set('view engine','hbs') 
app.set('views',path.join(__dirname,'/resources/views')); 


// routes file  
// database connection
require('./app/config/connection')
intiRoutes(app);

app.listen(port,()=>{
    console.log(`This ${port} port number listening.`);
})