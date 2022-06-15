const registerController=()=>{
    return {
        index(req,res){
            res.render('home')
        }
    }
}


module.exports=registerController