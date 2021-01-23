const express = require("express");
const routes = express.Router()
const ctrStudents = require('../controller/estudiantes')

routes.post('/', (req, resp)=> {
    let {body} = req

    let status= 201
    let msg=body
    let ok = ctrStudents.postStudent(body)
    
    
    if(ok === false){
      status = 401,
      msg ="Datos invalidos"
    }
    return resp.status(status).send({
      status: status,
      msg: msg
    })
  })


module.exports = routes;