const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const estudiantes = require('./routes/estudiantes')

require('dotenv').config()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/estudiantes', estudiantes)

app.listen(process.env.PORT, ()=>{
  console.log(`Server start in the port ${process.env.PORT} `)
})