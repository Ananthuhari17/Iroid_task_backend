const user=require('../models/userschema')
const jwt=require('jsonwebtoken')

exports.Loginuser=async (req,res)=>{
    const {email,psw}=req.body

    try{
        const data=await user.findOne({email})
        if(data){
       const token=     jwt.sign({
                loginemail:email

            },"super")
            res.status(200).json({data:data,token:token})
        }
        else{
            res.status(404).json('user not found please register')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}