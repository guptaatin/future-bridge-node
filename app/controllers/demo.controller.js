const db = require("../models")
const Demo = db.demo

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
            message: "Title Required"
        })
        return
    }

    const demo = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    Demo.create(demo).then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message
        })
    })
}

exports.findAll = (req, res) => {
    Demo.findAll().then((data) => {
        res.status(200).send(data)
    })
    .catch((err) => {
        res.status(500).send({
            message: err.message
        })
    })
}