const menus = require('../../models/menus')
const homeController=()=>{
    return {
        async index(req,res){
            try{

                const menuData = await menus.find();
                res.render('home',{'menuData':menuData})
            } catch(err){
                new Error(err)
            }
 
        }
    }
}


module.exports=homeController