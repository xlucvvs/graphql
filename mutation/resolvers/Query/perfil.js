// Arquivo onde referenciamos os tipos de consultas que podem ser feitas
const { perfis } = require('../../data/db') // importamos os usuarios e o perfis do arquivo onde definimos os dados

// exportamos as consultas
module.exports = {
    // consulta perfis onde serão retornados todos os perfis cadastrados
    perfis() {
        return perfis
    },
    // consulta perfil onde é passado um ID de perfil e irá nos retornar um unico perfil correspondente ao ID.
    perfil(_, { id }) {
        // aqui filtramos os perfis de acordo com o parametro id passado, onde se for encontrado um perfil com o ID, esse
        // perfil será armazenado na constante "sels".
        const sels = perfis
            .filter(p => p.id === id)
        return sels ? sels[0] : null
        // se for encontrado um perfil com o parametro ID, retorne o perfil, senão, retorna nulo.
    }
}