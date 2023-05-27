const user=require('../models/userschema')


exports.userRegister=async(req,res)=>{


    const {username,email,psw}=req.body

    try{
        const data=await user.findOne({email})

        if(data){
            res.status(401).json("user already exists please login")
        }
        else{
            const newdata=await new user({
                username,email,psw
            })
            await newdata.save()
            res.status(200).json("user created successfully")
        }

    }
    catch(error){
        res.status(404).json(error)
    }
}