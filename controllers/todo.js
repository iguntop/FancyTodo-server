const {Todo} = require("../models")

class Controller{
    static create(req,res){
        const{title,description,status,due_date} = req.body
        Todo.create({title:title,description:description,status:status,due_date:due_date})
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
        Todo.findAll()
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
           where:{ id:id}
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