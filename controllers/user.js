const {User} = require("../models")
const {decryptPassword} = require("../helpers/bcrypt")
const {generateToken} = require("../helpers/jwt")
class Controller{  

    static register(req,res,next){
        let payload = {
            email: req.body.email,
            password: req.body.password
        }
        console.log(payload);
        
        User.create(payload)
        .then(result =>{
            let user = {
                id:result.id,
                email:result.email
            }
            let token = generateToken(user)
            res.status(201).json({
                msg:'Succes Create User',
                Data:{
                    'id':user.id,
                    'email':user.email,
                    'token': token 
                }
            })
        })
        .catch(err=>{
            res.status(500).json({
                'msg':"Internal Server Error",
                'error':err
            })
        })
    }


    static login(req,res,next){
        let payload = {
            email: req.body.email,
            password: req.body.password
        }

        User.findOne({
            where:{
                email:payload.email
            }
        })

        .then(result=>{
            if(result){
                
                let compare = decryptPassword(payload.password,result.password)
                // console.log(payload.password,result.password,compare);
                if(compare){
                    let user = {
                        id: result.id,
                        email: result.email
                    }
                    let token = generateToken(user)
                    res.status(200).json({
                        msg:'Succes find user',
                        Data:{
                            'id':user.id,
                            'email':user.email,
                            'token': token 
                        }
                    })
                }else {
                    res.status(400).json({
                        'type':'Bad Request',
                        'msg':'Invalid Email/password'
                    })
                }
            
            }else{
                res.status(400).json({
                    'type':'Bad Request',
                    'msg':'Invalid Email/password'
                })
            }

        })

    }


}
module.exports = Controller