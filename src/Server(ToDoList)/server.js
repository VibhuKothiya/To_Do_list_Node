const express = require("express")
require("dotenv").config()
const http = require("http")
const cors = require("cors")
const mongoose = require("mongoose")
const dbConnect = require("./db/dbConnect")
const routes = require("./routes")

const app = express()

app.use(
    cors({
        origin : "*"
    })
)

app.use(express.json())

app.use("/v1", routes)

dbConnect()

http.createServer(app).listen(process.env.PORT, () =>{
    console.log(`server started on ${process.env.PORT}`);
})