const express = require('express')
const app = express()
const morgan = require('morgan')
const mySQL = require('mysql')
const parser = require('body-parser')

app.use(morgan('combined'))

const router = require('./Routes/users.js')
app.use(router)


app.listen(3000, ()=>{

console.log("App is running and litening on port 3000");

})
