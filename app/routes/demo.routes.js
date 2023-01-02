module.exports = app => {
    const demos = require("../controllers/demo.controller")

    var router = require("express").Router()

    router.post("/create", demos.create)

    router.get("/findAll", demos.findAll)

    app.use("/api/demos", router)
}