const DB = require('../../model/model')
const Auth = require('./func')

//Get All the News
module.exports.getAll = async (req, res) => {
    try {
        const data = await DB.find()
        if (!data) {
            res.status(404).send({ message: 'Any Data Not Found...!' })
        } else {
            res.send(data).status(200)
        }
    } catch (err) {
        res.send(500).send({ message: 'An error ocurred..!' })
    }
}

//Find a specific News
module.exports.getSpecific = async (req, res) => {
    try {

        /*
            Problem     :     There should an internal server error when give a wrong params id
        */

        if(req.params.id){
            const id = req.params.id
            const data = await DB.findById(id)

            if(data){
                res.send(data).status(200)
            }else{
                res.send({message:'Unable to found that News'}).status(404)
            }
        }
    } catch (err) {
        res.send(500).send({ message: 'An error ocurred..!' })
    }
}

//Save a new news
module.exports.save = async (req, res) => {
    try {
        if (Auth(req.body.title,req.body.description,req.body.author)) {
            const new_News = new DB({
                title: req.body.title,
                description: req.body.description,
                author: req.body.author
            })

            const save = await new_News.save(new_News)
            if (save) {
                res.send(save).status(200)
            } else {
                res.send({ message: 'Unable to add News' }).status(500)
            }
        }else{
            res.send({message:'Unable to Add News'}).status(500)
        }
    } catch (err) {
        res.send(500).send({ message: 'An error ocurred..!' })
    }
}

