const { getClientes } = require("../models/consultaModel")

const getAll = async(request, response) => {
    const lista = await getClientes()

    return response.status(200).json({lista: lista})
}
module.exports = {
    getAll
}