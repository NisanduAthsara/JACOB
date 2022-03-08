const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index',{title:'News API'})
})

router.get('*',(req,res)=>{
    res.render('err404',{title:"Error 404"})
})

module.exports = router