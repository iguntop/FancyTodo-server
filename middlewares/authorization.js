const {Todo} = require('../models')
function authorization(req,res,next){
   
    const id = req.params.id
    Todo.findOne({ 
        where:{
            id : +id
        }})

    .then(result=>{
        console.log(result.UserId);
        
        // console.log(result.dataValues.UserId,req.currentUserId);
        if(result.UserId == req.currentUserId){
            
            return next()
        }else {
            res.status(401).json({
                message:"Unauthorized",
                errors:"User Not authorized"})
        }    
        
    })
    .catch(err=>{
        res.status(404).json({
            message:"Error not found",
            todos:err
        })
        
    })
}
module.exports ={authorization}