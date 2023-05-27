const express=require('express')
const Register=require('../logic/registerlogic')
const login=require('../logic/login')

const router=express.Router()

router.post("/userregister",Register.userRegister)
router.post("/loginuser",login.Loginuser)
module.exports=router