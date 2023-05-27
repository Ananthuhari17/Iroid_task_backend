const mongoose=require('mongoose')


const userschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        required:true,
        unique:true,
        type:String
    },
    psw:{
        required:true,
        type:String
    }
})

const users=mongoose.model("users",userschema)

module.exports=users