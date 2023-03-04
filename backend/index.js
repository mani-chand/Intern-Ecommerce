const express = require('express')
const app =  express()
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const mongoose = require('mongoose')
const cors = require('cors');
const userRouter = require('./Routers/userRouter.js')
app.use(cors({
    origin: ['http://localhost:3000/', 'http://127.0.0.1:3000/'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use('/',userRouter)
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.DB_URL).then(()=>{
   app.listen(PORT,()=>console.log("server running on port",PORT))
}).catch(()=>{
    console.log("error connecting to mongo")
})