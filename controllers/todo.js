const {Todo} = require("../models")

class Controller{
    static create(req,res){
        
        
        let payload = {
            title:req.body.title,
            description: req.body.description,
            status:req.body.status,
            due_date: req.body.due_date,
            // req.currentUserId didapat dari middleware (Note: ngak pake body)
            UserId:req.currentUserId

        }
        console.log(payload);
        
        
        Todo.create(payload)
        .then(result=>{
            res.status(201).json({
                message:"Data created Success",
                todos:result
            })
        })
        .catch(err=>{
            
            res.status(400).json({
                message:"Validation Errors",
                todos:err
            })
            res.status(500).json({
                message:"server Error",
                todos:err
            })

            
        })
    }

    static readall(req,res){        
        Todo.findAll({
            where:{
                UserId:req.currentUserId,
                status:req.headers.status
            }
        })
        .then(result=>{
            res.status(200).json({
                message:"Read all Success",
                todos:result})
        })
        .catch(err=>{
            res.status(500).json({
                message:"server Error",
                todos:err
            })
        })
    }
    static readone(req,res){        
        const id = req.params.id
        Todo.findByPk(+id)        
        .then(result=>{
            res.status(200).json({
                message:"Read by PK Success",
                todos:result})
        })
        .catch(err=>{
            res.status(404).json({
                message:"Error not found",
                todos:err
            })
            
        })
    }
    static update(req,res){
        const{title,description,status,due_date} = req.body
        const id = req.params.id
        
        Todo.update({title:title,description:description,status:status,due_date:due_date},{
           where:{ 
               id:id
            }
         })
        .then(result=>{
            res.status(200).json({
                message:"Updated Success",
                todos:result})
        })
        .catch(err=>{
            res.status(404).json({
                message:"Error not found",
                todos:err
            })
            res.status(400).json({
                message:"Validation Errors",
                todos:err
            })
            res.status(500).json({
                message:"server Error",
                todos:err
            })
        })
    }
    static updateStatus(req,res){
        const{status} = req.body
        const id = req.params.id
        
        Todo.update({status:status},{
           where:{ 
               id:id
            }
         })
        .then(result=>{
            res.status(200).json({
                message:"Updated Success",
                todos:result})
        })
        .catch(err=>{
            res.status(404).json({
                message:"Error not found",
                todos:err
            })
            res.status(400).json({
                message:"Validation Errors",
                todos:err
            })
            res.status(500).json({
                message:"server Error",
                todos:err
            })
        })
    }
    static delete(req,res){
        const id = req.params.id
       
        Todo.destroy({where:{
            id:id
        }})
        .then(result=>{
            res.status(200).json({
                message:"Delete Success",
                todos:result})
        })
        .catch(err=>{
            res.status(400).json({
                message:"Validation Errors",
                todos:err
            })
            res.status(500).json({
                message:"server Error",
                todos:err
            })
        })
    }
}
module.exports = Controller