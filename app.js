const express = require ("express")
const router = require ("./pathroutes/routes")
const cookieParser = require("cookie-parser")
const connectDB = require("./models/db")
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT || 5500

app.listen(5500, async() => {
    await connectDB();
    console.log("server is running")
});
app.use(router)