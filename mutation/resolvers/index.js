// Esse é o nosso arquivo principal que irá direcionar os pedidos para resolvers especificos

// Importamos os resolvers
const Query = require('./Query')
const Mutation = require('./Mutation')
const Usuario = require('./Usuario')

// exportamos os resolvers importados
module.exports = {
    Query,
    Mutation,
    Usuario
}