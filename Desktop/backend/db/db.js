let mongoose=require('mongoose')
new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})
mongoose.model("user",userSchema)
module.exports=User