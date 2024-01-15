const app = require('./app')
const dotenv = require('dotenv').config()
const http = require('http')

const server=http.createServer(app)
server.listen(80, () => console.log(`🚀 Servidor rodando na porta 80`))
