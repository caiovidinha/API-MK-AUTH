    const axios = require('axios')
    const https = require('https')
    const instance = axios.create({
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
    })
    require('dotenv').config()

    const getToken = async () => {
    const url = `${process.env.URL}/api`
    const b64credentials = btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
    const response = await instance.get(url, {
        headers: {
            'Authorization' : `Basic ${b64credentials}`
        }
    })
    return response.data
    }

    const getClientes = async () => {
    const url = `${process.env.URL}/api/cliente/listagem`
    const JWT = await getToken()
    const response = await instance.get(url, {
        headers: {
            'Authorization' : `Bearer ${JWT}`
        }
    })
    return response.data.clientes
    }

    module.exports = {
    getToken,
    getClientes
    }