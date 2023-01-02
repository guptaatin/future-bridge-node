const express = require("express")
const cors = require("cors")

const app = express()

var corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended: true}))

const db = require("./app/models")
db.sequelize.sync().then(() => {
    console.log("db synced")
})
.catch((err) => {
    console.log("fail to sync")
})

app.get("/", (req, res) => {
    res.json({message: "Welcome Future Bridge"})
})

require("./app/routes/demo.routes")(app)
require("./app/routes/movie.routes")(app)

const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})