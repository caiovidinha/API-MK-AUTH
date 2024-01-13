const { getCredentials } = require("../models/loginModel")


const getAll = async(request, response) => {
    const login = request.body.login
    const cpf = request.body.cpf
    const person = await getCredentials(login)
    if(!person) return response.status(400).json({"error":"login"})
    if(cpf!==person.dados[0].cpf_cnpj) return response.status(400).json({"error":"cpf"}) 
    return response.status(201).json({
        "nome" : person.dados[0].nome,
    })
}
module.exports = {
    getAll
}