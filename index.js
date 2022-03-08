const express = require('express')
const app = express()
require('dotenv/config')
const path = require('path')

const router = require('./server/router/router')

const PORT = process.env.PORT || 3000

//set view engine
app.set('view engine','ejs')

//set public assets
app.use('/css',express.static(path.join(__dirname,'assets/css')))
app.use('/img',express.static(path.join(__dirname,'assets/img')))

//use the routes
app.use(router)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})