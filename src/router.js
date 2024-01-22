const express = require('express')
const cors = require('cors')
const controllerConsulta = require('./controllers/consultaController')
const constrollerLogin = require('./controllers/loginController')

const router = express.Router()
router.get('/ping', cors(), controllerConsulta.getOk)
router.get('/consulta/:cep/:num', cors(), controllerConsulta.getAll)
router.post('/login', cors(), constrollerLogin.getAll)

module.exports = router