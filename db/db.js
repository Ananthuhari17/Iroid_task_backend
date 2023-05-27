const mongoose=require('mongoose')



const DB=process.env.DATABASE

const data=mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("data base is connected sucessfully");
})

module.exports=data