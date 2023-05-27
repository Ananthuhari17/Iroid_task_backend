require('dotenv').config()

const express=require('express')
const cors=require('cors')

const server=express()
const router=require('./router/router')

require('./db/db')
server.use(cors())
server.use(express.json())
server.use(router)

const port=4000

server.listen(port,()=>{
    console.log(`server os starting on server ${port}`);
})
