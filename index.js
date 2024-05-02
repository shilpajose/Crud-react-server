// loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
// require('./DB/connection')
require('./DB/connection')

// creates an express application
const pfServer = express()

// use cors in express server 
pfServer.use(cors())
pfServer.use(express.json()) //Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
pfServer.use(router)

// set port to run server
const PORT = 3001 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Placement-Cell Server Started at Port: ${PORT}`);
})

pfServer.get("/",(req,res)=>{
    res.status(200).send(`<h1 style="color:red !important;">Placement-Cell server started waiting for client request!!!</h1>`)
})