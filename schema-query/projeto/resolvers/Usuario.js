const { perfis } = require('../data/db')
// resolver para resolver o tipo de dado que vem do banco para o modelo graphql
module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    random(usuario) {
        return 'randomico a ser resolvido'
    },
    perfil(usuario) {
        const sels = perfis
            .filter(p => p.id == usuario.perfil_id)
        return sels ? sels[0] : null
    }
}