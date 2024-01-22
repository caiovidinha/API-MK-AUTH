const { getClientes } = require("../models/consultaModel")

const getAll = async(request, response) => {
    const lista = await getClientes()

    return response.status(200).json({lista: lista})
}

getOk = async(request, response) => {
    return response.status(200).json({ok: "ok"})
}
module.exports = {
    getAll,
    getOk
}