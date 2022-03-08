const express = require('express')
const router = express.Router()
const controller = require('../controller/controller')

router.get('/',(req,res)=>{
    res.render('index',{title:'JACOB'})
})

router.get('/start',(req,res)=>{
    res.render('get_start',{title:'JACOB'})
})

//API
router.get('/api/news',controller.getAll)
router.get('/api/news/:id',controller.getSpecific)
router.post('/api/news',controller.save)
router.put('/api/news/:id',controller.update)
router.delete('/api/news/:id',controller.delete)

router.get('*',(req,res)=>{
    res.render('err404',{title:"Error 404"})
})

module.exports = router