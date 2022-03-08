const express = require('express')
const app = express()
require('dotenv/config')
const path = require('path')
const mongoose = require('mongoose')

const router = require('./server/router/router')

const PORT = process.env.PORT

app.use(express.urlencoded({extended:true}))

//set view engine
app.set('view engine','ejs')

//set public assets
app.use('/css',express.static(path.join(__dirname,'assets/css')))
app.use('/img',express.static(path.join(__dirname,'assets/img')))
app.use('/js',express.static(path.join(__dirname,'assets/js')))

//use the routes
app.use(router)

//connect to MongoDB
try{
    mongoose.connect(process.env.MONGO,{useNewUrlParser:true},()=>{
        console.log('Connect To DB');
    })
}catch(err){
    console.log(err)
}

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})