const router = require("express").Router()
const todocontroller = require("../controllers/todo")

// router.get('/',(req,res)=>{
//     res.status(200).json({message:"welcome to todo apps"})
// })
router.post('/',todocontroller.create)
router.get('/',todocontroller.readall)
router.get('/:id',todocontroller.readone)
router.put('/:id',todocontroller.update)
router.delete('/:id',todocontroller.delete)
module.exports = router