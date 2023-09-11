const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./database")

const app = express();

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use((req, res) => {
    res.sendStatus(404)
})

app.listen(4000, () => {
    sequelize.sync()
    .then(() => console.log("DB is connected"))
    .catch(err => console.log(err))

    console.log("Server on Port 4000")
});
