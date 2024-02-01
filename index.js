const express = require('express')
const app = express();
const authRoutes = require('./Routes/authRoutes')
const mongoose = require('mongoose')
const port = 5000
const cors = require('cors')


mongoose.set('strictQuery',false)

mongoose.connect('mongodb+srv://hunterboy:ayush1998@cluster0.fxwwuen.mongodb.net/Recipe').then((res)=>{
  app.listen(port ,()=>{
    console.log('listening',port)
  } )
}).catch((err)=>{
  console.log(err)
})

app.use(cors())
app.use(express.json)
app.use(express.urlencoded({extended: true}))
app.use(authRoutes)
app.use((req,res)=>{
  return res.status(404).json('not found')
})