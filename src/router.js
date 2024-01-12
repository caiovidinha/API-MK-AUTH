const express = require('express')
const cors = require('cors')
const controllerConsulta = require('./controllers/consultaController')
const constrollerLogin = require('./controllers/loginController')

const router = express.Router()

router.get('/consulta', cors(), controllerConsulta.getAll)
router.post('/login', cors(), constrollerLogin.getAll)

module.exports = router