const bcrypt = require("bcryptjs")

function encryptPassword(password){
let salt = bcrypt.genSaltSync(10)
let hash = bcrypt.hashSync(password,salt)
return hash
}
function decryptPassword(){

}
module.exports = { encryptPassword,decryptPassword}