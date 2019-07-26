// Arquivo onde referenciamos os tipos de consultas que podem ser feitas
const { usuarios } = require('../../data/db') // importamos os usuarios e o perfis do arquivo onde definimos os dados

// exportamos as consultas
module.exports = {
    // consulta usuarios irá nos retornar todos os usuários no array de usuários
    usuarios() {
        return usuarios
    },
    // consulta usuário passando o parametro id irá nos retornar um unico usuário correspondente ao id
    usuario(_, { id }) {
        // Exemplo 1
        // aqui dizemos que o usuario selecionado será filtrado de usuário onde, o filtro será o id passado e deve ser igual ao
        // id de um usuario guardado
        const sels = usuarios
            .filter(u => u.id === id)
        return sels ? sels[0] : null
        // retorna usuario selecionado pelo id passado, se o ID não existir, será retornado nulo.
    
        // PARA O EXEMPLO 2, PRECISAMOS importar a função indiceUsuario para este código e alterar o arquivo 'Query.graphql'
        // da seguinte forma: Onde temos:
        // usuario(id: Int): Usuario # Acessamos um usuario por meio de sua ID

        // Teremos: 
        // usuario(
        //     filtro: UsuarioFiltro!
        // ): Usuario # Acessamos um usuario por meio de sua ID

        // Exemplo 2
        // const i = IndiceUsuario(filtro)
        // if (i < 0 ) return null
        // return usuarios[i]
    }
}