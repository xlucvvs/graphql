const { perfis } = require('../data/db') // importamos os perfis para que possamos utilizar aqui

module.exports = {
    // resolver de perfil para usuario, podendo ser administrador ou comum
    perfil(usuario) {
        // aqui verificamos qual o tipo de perfil do usuário, onde o id do perfil deve ser igual ao perfil_id de usuário
        const sels = perfis
            .filter(p => p.id === usuario.perfil_id)
        return sels ? sels[0] : null
        // retorna o tipo de perfil selecionado, se for igual a 0, retorna nulo.
    }
}