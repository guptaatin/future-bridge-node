module.exports = app => {
    const demos = require("../controllers/movie.controller")

    var router = require("express").Router()

    router.get("/getMovies", demos.getMovies)

    app.use("/api/demos", router)
}