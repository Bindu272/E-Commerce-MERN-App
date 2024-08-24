const express = require('express')
const cors=require('cors')
// const cooieParser=require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')

const app=express()
app.use(cors())

const PORT=8080||process.env.PORT
connectDB( ).then(()=>{
    app.listen(PORT,()=>{
        console.log("Connect to DB")
        console.log("Server is running")
    })
})
app.listen(PORT,()=>{
    console.log("Server is running")
})

